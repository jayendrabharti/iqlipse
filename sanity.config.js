import { defineConfig } from 'sanity';
import {structureTool, StructureBuilder} from 'sanity/structure'
import schemas from './sanity/schema/schemas';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import {colorInput} from '@sanity/color-input'
import { singletonTools } from 'sanity-plugin-singleton-tools';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

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
            structure: (S, context) => {
              return S.list()
                .title('Content')
                .items([

                  orderableDocumentListDeskItem({type: 'members', S, context}),
                  
                  ...S.documentTypeListItems().filter(
                    item => item.getId() !== 'members'
                  )
                
                ])
            },
          }),
    ],
    
    schema: {types: schemas},

});


export default config;