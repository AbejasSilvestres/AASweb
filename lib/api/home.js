import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const homeDirectory = join(process.cwd(), '_home');

export const getHomeSectionSlugs = () => fs.readdirSync(homeDirectory);

export const getHomeSectionBySlug = (slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(homeDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const serializableData = JSON.parse(JSON.stringify(data));
  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof serializableData[field] !== 'undefined') {
      items[field] = serializableData[field];
    }
  });
  return items;
};

export const getAllHomeSections = (fields = []) => {
  const slugs = getHomeSectionSlugs();
  return slugs.map((slug) => getHomeSectionBySlug(slug, fields));
};
