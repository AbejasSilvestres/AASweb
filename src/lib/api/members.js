import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const membersDirectory = join(process.cwd(), 'data', '_members');

export const getMemberSlugs = () => fs.readdirSync(membersDirectory);

export const getMemberBySlug = getItemBySlug(membersDirectory);

export const getAllMembers = (fields = []) =>
  getMemberSlugs().map((slug) => getMemberBySlug(slug, fields));
