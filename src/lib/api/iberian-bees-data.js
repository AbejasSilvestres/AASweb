import csv from 'csvtojson';
import { join } from 'path';

const dataFile = join(process.cwd(), 'public', 'assets', 'iberian_bees.csv');

const filterOutEmpty = (marker) =>
  Object.keys(marker).reduce(
    (acc, next) => ({
      ...acc,
      ...(marker[next] !== 'NA' && { [next]: marker[next] }),
    }),
    {}
  );

const isUnused = (key) => key === 'sex';

const filterOutUnused = (marker) =>
  Object.keys(marker).reduce(
    (acc, next) => ({
      ...acc,
      ...(!isUnused(next) && { [next]: marker[next] }),
    }),
    {}
  );

const formatDate = (marker) => {
  const { day, month, year, ...rest } = marker;
  const date =
    day && month && year
      ? `${day}/${month}/${year}`
      : month && year
      ? `${month}/${year}`
      : year;
  return date
    ? {
        date,
        ...rest,
      }
    : rest;
};

export const getJsonData = async () => {
  const markers = await csv().fromFile(dataFile);
  return markers
    .map(filterOutEmpty)
    .map(filterOutUnused)
    .map(formatDate)
    .sort((a, b) => a.species?.localeCompare(b.species));
};
