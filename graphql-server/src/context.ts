import { PrismaClient } from '@prisma/client'
import { Request } from 'express'

import {
    decodeAuthHeader,
    AuthTokenPayload
} from './utils/auth'

const prisma = new PrismaClient()

interface Context {
    prisma: PrismaClient
    userId?: number
}

const context = ({ req }: { req: Request }): Context => {
    const token =
        req && req.headers.authorization
            ? decodeAuthHeader(req.headers.authorization)
            : null

    return {
        prisma,
        userId: token?.userId
    }
}

export {
    prisma,
    Context,
    context
}

