import { resolve } from 'path'
import { buildSchemaSync } from 'type-graphql'

import { ListItemResolver } from './listItem/resolver/ListItemResolver'

export const schema = buildSchemaSync({
  resolvers: [ListItemResolver],
  nullableByDefault: true,
  emitSchemaFile: resolve(__dirname, '../../', 'schema.gql'),
})
