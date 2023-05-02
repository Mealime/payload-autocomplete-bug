import type { CollectionConfig } from '../../../../src/collections/config/types';

export const TagsCollection: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
    },
  ],
  timestamps: false,
};
