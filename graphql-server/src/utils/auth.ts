import * as jwt from 'jsonwebtoken'

const APP_SECRET = 'GraphQL-is-aw3some'

interface AuthTokenPayload {
    userId: number
}

function decodeAuthHeader(authHeader: String): AuthTokenPayload {
    const token = authHeader.replace("Bearer ", "")

    if (!token) {
        throw new Error('No token found')
    }

    return jwt.verify(token, APP_SECRET) as AuthTokenPayload
}

export {
    APP_SECRET,
    AuthTokenPayload,
    decodeAuthHeader
}

