import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const iberianBeesDirectory = join(process.cwd(), 'data', '_iberian_bees');

export const getIberianBeesSectionSlugs = () =>
  fs.readdirSync(iberianBeesDirectory);

export const getIberianBeesSectionBySlug = getItemBySlug(iberianBeesDirectory);

export const getAllIberianBeesSections = (fields = []) =>
  getIberianBeesSectionSlugs().map((slug) =>
    getIberianBeesSectionBySlug(slug, fields)
  );
