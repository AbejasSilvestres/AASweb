import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const membersDirectory = join(process.cwd(), '_members');

export const getMemberSlugs = () => fs.readdirSync(membersDirectory);

export const getMemberBySlug = (slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(membersDirectory, `${realSlug}.md`);
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

export const getAllMembers = (fields = []) => {
  const slugs = getMemberSlugs();
  return slugs.map((slug) => getMemberBySlug(slug, fields));
};
