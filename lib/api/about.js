import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const aboutDirectory = join(process.cwd(), '_about');

export const getAboutSectionSlugs = () => fs.readdirSync(aboutDirectory);

export const getAboutSectionBySlug = getItemBySlug(aboutDirectory);

export const getAllAboutSections = (fields = []) => {
  const slugs = getAboutSectionSlugs();
  return slugs.map((slug) => getAboutSectionBySlug(slug, fields));
};
