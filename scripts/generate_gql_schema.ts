import 'reflect-metadata'

import { emitSchemaDefinitionFileSync } from 'type-graphql'

import { schema } from '../src/graphql/LocalSchema'

require('tsconfig-paths').register()

emitSchemaDefinitionFileSync('./webmobile-bos-schema.graphqls', schema)
