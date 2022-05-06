import {
    extendType,
    nonNull,
    objectType,
    stringArg,
    intArg
} from 'nexus'
import { NexusGenObjects } from '../../nexus-typegen'

export const Link = objectType({
    name: "Link",
    definition(t) {
        t.nonNull.int("id")
        t.nonNull.string("description"),
        t.nonNull.string("url")
    }
})

let links: NexusGenObjects["Link"][] = [
    {
        id: 1,
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    },
    {
        id: 2,
        url: 'graphql.org',
        description: 'GraphQL official website'
    }
]

export const LinkQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('feed', {
            type: 'Link',
            resolve(parent, args, context, info) {
                return links
            }
        })
    }
})

export const LinkQueryById = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('link', {
            type: 'Link',
            args: {
                id: nonNull(intArg())
            },
            resolve(parent, args, context) {
                const { id } = args
                return links.filter(l => l.id === id)[0]
            }
        })
    }
})

export const LinkMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('post', {
            type: 'Link',
            args: {
                description: nonNull(stringArg()),
                url: nonNull(stringArg())
            },

            resolve(parent, args, context) {
                const { description, url } = args

                let idCount = links.length + 1
                const link = {
                    id: idCount,
                    description: description,
                    url: url
                }

                links.push(link)
                return link
            }
        }),
        t.nonNull.field('update', {
            type: 'Link',
            args: {
                id: nonNull(intArg()),
                description: nonNull(stringArg()),
                url: nonNull(stringArg())
            },

            resolve(parent, args, context) {

                console.log("=====")
                console.log(args)
                console.log("=====")

                return links[0]
            }
        }),
        t.nonNull.field('delete', {
            type: 'Link',
            args: {
                id: nonNull(stringArg()),
            },

            resolve(parent, args, context) {

                console.log("=====")
                console.log(args)
                console.log("=====")

                return links[0]
            }
        })
    }
})

