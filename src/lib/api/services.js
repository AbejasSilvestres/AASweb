import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const servicesDirectory = join(process.cwd(), 'data', '_services');

export const getServicesSectionSlugs = () => fs.readdirSync(servicesDirectory);

export const getServiceSectionBySlug = getItemBySlug(servicesDirectory);

export const getAllServicesSections = (fields = []) =>
  getServicesSectionSlugs().map((slug) =>
    getServiceSectionBySlug(slug, fields)
  );
