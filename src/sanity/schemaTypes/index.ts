import { type SchemaTypeDefinition } from 'sanity'

// import your schemas
import hero from './hero'
import testimonial from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, testimonial],
}