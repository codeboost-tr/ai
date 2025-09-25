import type { CollectionConfig } from 'payload'

export const Variants: CollectionConfig = {
  slug: 'variants',
  admin: {
    group: 'Experiments',
    useAsTitle: 'name',
    description: 'Variations of an experiment',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Unique identifier for this variant',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Description of this variant',
      },
    },
    {
      name: 'isControl',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether this is the control/baseline variant',
      },
    },
    {
      name: 'config',
      type: 'json',
      required: true,
      admin: {
        description: 'Configuration values for this variant',
      },
    },
  ],
}
