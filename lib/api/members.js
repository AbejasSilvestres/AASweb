import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../apiUtils';

const membersDirectory = join(process.cwd(), '_members');

export const getMemberSlugs = () => fs.readdirSync(membersDirectory);

export const getMemberBySlug = getItemBySlug(membersDirectory);

export const getAllMembers = (fields = []) => {
  const slugs = getMemberSlugs();
  return slugs.map((slug) => getMemberBySlug(slug, fields));
};
