import fs from 'fs';
import { join } from 'path';

import { getItemBySlug } from '../api-utils';

const timelineDirectory = join(process.cwd(), 'data', '_timeline');

export const getTimelineItemSlugs = () => fs.readdirSync(timelineDirectory);

export const getTimelineItemBySlug = getItemBySlug(timelineDirectory);

export const getAllTimelineItems = (fields = []) =>
  getTimelineItemSlugs()
    .map((slug) => getTimelineItemBySlug(slug, fields))
    .sort((item1, item2) => (item1.order > item2.order ? 1 : -1));
