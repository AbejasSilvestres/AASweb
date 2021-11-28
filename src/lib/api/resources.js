import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const resourcesDirectory = join(process.cwd(), 'data', '_resources');

export const getResourcesSlugs = () => fs.readdirSync(resourcesDirectory);

export const getResourceBySlug = getItemBySlug(resourcesDirectory);

export const getAllResources = (fields = []) =>
  getResourcesSlugs().map((slug) => getResourceBySlug(slug, fields));
