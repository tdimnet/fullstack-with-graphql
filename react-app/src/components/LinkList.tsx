import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Link, {
    TLink
} from './Link'

const links: TLink[] = [
    {
        id: 'link-id-1',
        description: 'Prisma gives you a powerful database toolkit',
        url: 'https://prisma.io'
    },
    {
        id: 'link-id-2',
        description: 'The best GraphQL client',
        url: 'https://www.apollographql.com/docs/react'
    }
]

const FEED_QUERY = gql`
    {
        feed {
            id
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`

interface TFeed {
    feed: {
        links: TLink[]
    }
}

const Component = () => {
    const { data }: { data: TFeed } = useQuery(FEED_QUERY)

    console.log("====")
    console.log(data.feed.links)
    console.log("====")

    return (
        <div>
            {data && (
                <>
                    {links.map(link => (
                        <Link key={link.id} link={link} />
                    ))}
                </>
            )}
        </div>
    )
}

export default Component

