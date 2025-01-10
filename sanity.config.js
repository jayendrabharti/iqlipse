import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input';
import { colorInput } from '@sanity/color-input';
import { singletonTools } from 'sanity-plugin-singleton-tools';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import client from './sanity/utils/client';
import schemas from './sanity/schema/schemas';
import { Users } from 'lucide-react';

const DocumentCount = async (documentName) => {
  try {
    const count = await client.fetch(`count(*[_type == '${documentName}'])`);
    return count;
  } catch (error) {
    console.error(`Error fetching document count for ${documentName}:`, error);
    return 0;
  }
};

const config = defineConfig({
  projectId: 'putg7l53',
  dataset: 'production',
  title: 'Iqlipse Club Website',
  basePath: '/admin',
  apiVersion: '2025-01-04',
  plugins: [
    simplerColorInput(),
    colorInput(),
    singletonTools(),
    structureTool({
      structure: async (S, context) => {
        const membersCount = await DocumentCount('members');
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'members',
              title: `Members (${membersCount})`,
              icon: Users,
              S,
              context,
            }),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'members'
            ),
          ]);
      },
    }),
  ],
  schema: { types: schemas },
});

export default config;
