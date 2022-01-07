import { join } from 'path';
import csv from 'csvtojson';

const dataFile = join(process.cwd(), 'public', 'assets', 'data.csv');

export const getJsonData = () => csv().fromFile(dataFile);
