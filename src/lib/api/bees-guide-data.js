import { join } from 'path';
import csv from 'csvtojson';

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

export const locations = {
  location_cordillera_betica_penibetica: 'Cordillera Bética Penibética',
  location_cordillera_cantabrica: 'Cordillera Cantábrica',
  location_costa_atlantica: 'Costa Atlántica',
  location_costa_cantabrica: 'Costa Cantábrica',
  location_costa_mediterranea: 'Costa Mediterránea',
  location_meseta_interior_peninsula: 'Meseta Interior Península',
  location_pirineos: 'Pirineos',
};

const parseLocation = (bee) => {
  const locationKeys = Object.keys(locations);
  return Object.keys(bee).reduce((acc, next) => {
    if (!locationKeys.includes(next)) {
      return {
        ...acc,
        [next]: bee[next],
      };
    }
    return {
      ...acc,
      location: bee[next]
        ? (acc.location || []).concat(locations[next])
        : acc.location,
    };
  }, {});
};

export const getJsonData = async () => {
  const bees = await csv().fromFile(dataFile);
  return bees.map(parseBoolean).map(parseLocation);
};
