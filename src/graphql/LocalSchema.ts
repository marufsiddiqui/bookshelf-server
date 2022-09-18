import { resolve } from 'path'
import { buildSchemaSync } from 'type-graphql'

import { BookResolver } from './book/resolver/BookResolver'
import { ListItemResolver } from './listItem/resolver/ListItemResolver'

export const schema = buildSchemaSync({
  resolvers: [ListItemResolver, BookResolver],
  nullableByDefault: true,
  emitSchemaFile: resolve(__dirname, '../../', 'schema.gql'),
})
