import { Rule } from '@sanity/types'

export const solutions = {
  name: 'solutions',
  title: 'Solutions Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'line1',
          title: 'First Line',
          type: 'string',
        },
        {
          name: 'line2',
          title: 'Second Line',
          type: 'string',
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'checklistItems',
      title: 'Checklist Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Text',
            type: 'string',
            validation: (rule: Rule) => rule.required()
          }
        ]
      }],
      validation: (rule: Rule) => rule.required().min(1)
    }
  ]
}
