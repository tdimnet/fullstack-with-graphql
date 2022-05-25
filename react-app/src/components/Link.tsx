import React from 'react'

export type TLink = {
    id: string
    description: string
    url: string
}

export interface LinkProps {
    link: TLink
}

const Component: React.FC<LinkProps> = ({ link }) => (
    <div>
        <div>
            {link.description} {link.url}
        </div>
    </div>
)

export default Component

