import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { markdownSchema } from 'sanity-plugin-markdown'


export default defineConfig({
  name: 'default',
  title: 'next-blog-cms',

  projectId: '0zxiq0ro',
  dataset: 'production',

  plugins: [
    deskTool(), 
    visionTool(),
    markdownSchema(),
  ],

  schema: {
    types: schemaTypes,
  },

  title: 'lucasNextBlog',
  basePath: '/studio'
})
