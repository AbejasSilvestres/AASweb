import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const beesGuideDirectory = join(process.cwd(), 'data', '_bees_guide');

export const getBeesGuideSlugs = () => fs.readdirSync(beesGuideDirectory);

export const getBeesGuideBySlug = getItemBySlug(beesGuideDirectory);

export const getAllBeesGuide = (fields = []) =>
  getBeesGuideSlugs().map((slug) => getBeesGuideBySlug(slug, fields));
