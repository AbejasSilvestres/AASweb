import csv from 'csvtojson';
import { join } from 'path';

const dataFile = join(process.cwd(), 'public', 'assets', 'bees-guide.csv');

const parseBoolean = (bee) =>
  Object.keys(bee).reduce(
    (acc, next) => ({
      ...acc,
      [next]:
        bee[next] === 'FALSE' || bee[next] === 'TRUE'
          ? JSON.parse(bee[next].toLowerCase())
          : bee[next],
    }),
    {}
  );

export const locations = [
  'location_cordillera_betica_penibetica',
  'location_cordillera_cantabrica',
  'location_costa_atlantica',
  'location_costa_cantabrica',
  'location_costa_mediterranea',
  'location_meseta_interior_peninsula',
  'location_pirineos',
];

const parseLocation = (bee) =>
  Object.keys(bee).reduce((acc, next) => {
    if (!locations.includes(next)) {
      return {
        ...acc,
        [next]: bee[next],
      };
    }
    return {
      ...acc,
      location: bee[next] ? (acc.location || []).concat(next) : acc.location,
    };
  }, {});

export const getJsonData = async () => {
  const bees = await csv().fromFile(dataFile);
  return bees.map(parseBoolean).map(parseLocation);
};
