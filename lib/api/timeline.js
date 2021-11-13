import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const timelineDirectory = join(process.cwd(), '_timeline');

export const getTimelineItemSlugs = () => fs.readdirSync(timelineDirectory);

export const getTimelineItemBySlug = getItemBySlug(timelineDirectory);

export const getAllTimelineItems = (fields = []) => {
  const slugs = getTimelineItemSlugs();
  return slugs.map((slug) => getTimelineItemBySlug(slug, fields));
};
