export function aboutFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'title',
      required: true,
    },
    {
      type: 'string',
      name: 'content',
      label: 'content',
      ui: {
        component: 'textarea',
      },
      required: true,
    },
  ];
}
export function bees_guideFields() {
  return [];
}
export function homeFields() {
  return [
    {
      type: 'object',
      name: 'image',
      label: 'image',
      fields: [
        {
          type: 'string',
          name: 'label',
          label: 'label',
          required: true,
        },
        {
          type: 'image',
          name: 'url',
          label: 'url',
          required: true,
        },
      ],
    },
    {
      type: 'string',
      name: 'title',
      label: 'title',
      required: true,
    },
    {
      type: 'object',
      name: 'button',
      label: 'button',
      fields: [
        {
          type: 'string',
          name: 'url',
          label: 'url',
        },
        {
          type: 'string',
          name: 'label',
          label: 'label',
        },
      ],
    },
  ];
}
export function iberian_beeFields() {
  return [];
}
export function memberFields() {
  return [
    {
      type: 'string',
      name: 'name',
      label: 'name',
      required: true,
    },
    {
      type: 'image',
      name: 'photo',
      label: 'photo',
      required: true,
    },
    {
      type: 'string',
      name: 'url',
      label: 'url',
      required: true,
    },
  ];
}
export function postFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'title',
      required: true,
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'excerpt',
      ui: {
        component: 'textarea',
      },
      required: true,
    },
    {
      type: 'image',
      name: 'coverImage',
      label: 'coverImage',
      required: true,
    },
    {
      type: 'datetime',
      name: 'date',
      label: 'date',
    },
    {
      type: 'object',
      name: 'author',
      label: 'author',
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'name',
          required: true,
        },
        {
          type: 'image',
          name: 'picture',
          label: 'picture',
          required: true,
        },
      ],
      required: true,
    },
  ];
}
export function projectFields() {
  return [
    {
      type: 'number',
      name: 'order',
      label: 'order',
      required: true,
    },
    {
      type: 'string',
      name: 'title',
      label: 'title',
      required: true,
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'excerpt',
      ui: {
        component: 'textarea',
      },
      required: true,
    },
    {
      type: 'image',
      name: 'coverImage',
      label: 'coverImage',
      required: true,
    },
  ];
}
export function resourceFields() {
  return [
    {
      type: 'string',
      name: 'category',
      label: 'category',
      options: ['Guide', 'Video', 'Infographics'],
      required: true,
    },
    {
      type: 'string',
      name: 'title',
      label: 'title',
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'description',
      ui: {
        component: 'textarea',
      },
      required: true,
    },
    {
      type: 'string',
      name: 'url',
      label: 'url',
      required: true,
    },
  ];
}
export function serviceFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'title',
      required: true,
    },
    {
      type: 'string',
      name: 'items',
      label: 'items',
      list: true,
      required: true,
    },
    {
      type: 'object',
      name: 'button',
      label: 'button',
      fields: [
        {
          type: 'string',
          name: 'url',
          label: 'url',
          required: true,
        },
        {
          type: 'string',
          name: 'label',
          label: 'label',
          required: true,
        },
      ],
      required: true,
    },
  ];
}
export function timelineFields() {
  return [
    {
      type: 'string',
      name: 'label',
      label: 'label',
      required: true,
    },
    {
      type: 'number',
      name: 'order',
      label: 'order',
      required: true,
    },
  ];
}
