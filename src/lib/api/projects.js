import fs from 'fs';
import { join } from 'path';
import { getItemBySlug } from '../api-utils';

const projectsDirectory = join(process.cwd(), 'data', '_projects');

export const getProjectsSlugs = () => fs.readdirSync(projectsDirectory);

export const getProjectBySlug = getItemBySlug(projectsDirectory);

export const getAllProjects = (fields = []) => {
  const slugs = getProjectsSlugs();
  return slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((project1, project2) => (project1.order > project2.order ? 1 : -1));
};
