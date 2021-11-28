import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const timelineDirectory = join(process.cwd(), 'data', '_timeline');

export const getTimelineItemSlugs = () => fs.readdirSync(timelineDirectory);

export const getTimelineItemBySlug = getItemBySlug(timelineDirectory);

export const getAllTimelineItems = (fields = []) =>
  getTimelineItemSlugs().map((slug) => getTimelineItemBySlug(slug, fields));
