export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag Text',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
          description: 'The text to display in the tag (e.g., "✨ Tecnologia disruptiva")',
        },
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title text of the hero section',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'The description text below the title',
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'object',
      fields: [
        {
          name: 'projects',
          title: 'Projects',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'number' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
        {
          name: 'offices',
          title: 'Offices',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'number' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
        {
          name: 'revenue',
          title: 'Revenue',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'number' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'suffix', title: 'Suffix', type: 'string' },
          ],
        },
      ],
    },
  ],
}
