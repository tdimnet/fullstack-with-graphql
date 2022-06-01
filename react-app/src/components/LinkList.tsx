import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Link, {
    TLink
} from './Link'


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

interface FeedData {
    feed: {
        id: string
        links: TLink[]
    }
}

const Component = () => {
    const { data, loading, error } = useQuery<FeedData>(FEED_QUERY)

    return (
        <div>
            {data && (
                <>
                    {data.feed.links.map(link => (
                        <Link key={link.id} link={link} />
                    ))}
                </>
            )}
        </div>
    )
}

export default Component

