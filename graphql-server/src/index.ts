import { ApolloServer } from 'apollo-server'

import { schema } from './schema'

export const server = new ApolloServer({
    schema
})

server.listen().then(({ url }) => {
    console.log(`Magic happens at url ${url}`)
})

