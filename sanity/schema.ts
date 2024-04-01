import { type SchemaTypeDefinition } from 'sanity'
import {general,clubs, banner, nav,sponsors, social, footer,policies, categories,authors,news,video} from './schemas'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [general, nav, clubs,  banner, sponsors, categories,authors, news,video, social, footer, policies],
}
