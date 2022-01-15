import fs from 'fs';
import { join } from 'path';

import { getItemBySlug } from '../api-utils';

const homeDirectory = join(process.cwd(), 'data', '_home');

export const getHomeSectionSlugs = () => fs.readdirSync(homeDirectory);

export const getHomeSectionBySlug = getItemBySlug(homeDirectory);

export const getAllHomeSections = (fields = []) =>
  getHomeSectionSlugs().map((slug) => getHomeSectionBySlug(slug, fields));
