import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const postsDirectory = join(process.cwd(), 'data', '_posts');

export const getPostSlugs = () => fs.readdirSync(postsDirectory);

export const getPostBySlug = getItemBySlug(postsDirectory);

export const getAllPosts = (fields = []) => {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};
