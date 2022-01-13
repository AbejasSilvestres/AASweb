import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const beesGuideDirectory = join(process.cwd(), 'data', '_bees_guide');

export const getBeesGuideSectionSlugs = () =>
  fs.readdirSync(beesGuideDirectory);

export const getBeesGuideSectionBySlug = getItemBySlug(beesGuideDirectory);

export const getAllBeesGuideSections = (fields = []) =>
  getBeesGuideSectionSlugs().map((slug) =>
    getBeesGuideSectionBySlug(slug, fields)
  );
