import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export const getItemBySlug =
  (directoryPath) =>
  (slug, fields = []) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(directoryPath, `${realSlug}.md`);
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
