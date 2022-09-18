import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

import { schema } from './graphql/LocalSchema'

async function startApolloServer() {
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  })
  const { url } = await server.listen()
  console.log(`🚀 Server ready at ${url}`)
}

startApolloServer().catch(() => {
  console.log(`💔 Server start failed`)
})
