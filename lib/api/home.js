import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../apiUtils';

const homeDirectory = join(process.cwd(), '_home');

export const getHomeSectionSlugs = () => fs.readdirSync(homeDirectory);

export const getHomeSectionBySlug = getItemBySlug(homeDirectory);

export const getAllHomeSections = (fields = []) => {
  const slugs = getHomeSectionSlugs();
  return slugs.map((slug) => getHomeSectionBySlug(slug, fields));
};
