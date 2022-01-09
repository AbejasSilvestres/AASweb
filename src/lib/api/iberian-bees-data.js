import { join } from 'path';
import csv from 'csvtojson';

const dataFile = join(process.cwd(), 'public', 'assets', 'data.csv');

const filterOutEmpty = (marker) =>
  Object.keys(marker).reduce(
    (acc, next) => ({
      ...acc,
      ...(marker[next] !== 'NA' && { [next]: marker[next] }),
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
    .map(formatDate)
    .sort((a, b) => a.species?.localeCompare(b.species));
};
