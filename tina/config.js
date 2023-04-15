import { defineConfig } from 'tinacms';

import { aboutFields } from './templates';
import { bees_guideFields } from './templates';
import { homeFields } from './templates';
import { iberian_beeFields } from './templates';
import { memberFields } from './templates';
import { postFields } from './templates';
import { projectFields } from './templates';
import { resourceFields } from './templates';
import { serviceFields } from './templates';
import { timelineFields } from './templates';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CMS_CLIENT_ID,
  token: process.env.TINA_CMS_TOKEN,
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'out',
  },
  media: {
    tina: {
      mediaRoot: 'assets',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        format: 'md',
        label: 'Posts',
        name: 'posts',
        path: 'data/_posts',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: 'md',
        label: 'Members',
        name: 'members',
        path: 'data/_members',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...memberFields(),
        ],
      },
      {
        format: 'md',
        label: 'Home',
        name: 'home',
        path: 'data/_home',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...homeFields(),
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: 'md',
        label: 'About',
        name: 'about',
        path: 'data/_about',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: aboutFields(),
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: 'md',
        label: 'Timeline',
        name: 'timeline',
        path: 'data/_timeline',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...timelineFields(),
        ],
      },
      {
        format: 'md',
        label: 'Projects',
        name: 'projects',
        path: 'data/_projects',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...projectFields(),
        ],
      },
      {
        format: 'md',
        label: 'Services',
        name: 'services',
        path: 'data/_services',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: serviceFields(),
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: 'md',
        label: 'Resources',
        name: 'resources',
        path: 'data/_resources',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: resourceFields(),
      },
      {
        format: 'md',
        label: 'Iberian bees',
        name: 'iberian_bees',
        path: 'data/_iberian_bees',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...iberian_beeFields(),
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: 'md',
        label: 'Bees guide',
        name: 'bees_guide',
        path: 'data/_bees_guide',
        frontmatterFormat: 'yaml',
        match: {
          include: '*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...bees_guideFields(),
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
    ],
  },
});
