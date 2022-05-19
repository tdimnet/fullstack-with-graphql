import { ApolloServer } from 'apollo-server'

import { schema } from './schema'
import { context } from './context'

export const server = new ApolloServer({
    schema,
    context
})

server.listen().then(({ url }) => {
    console.log(`Magic happens at url ${url}`)
})

