import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    //const links = await prisma.link.findMany()

    const newLink = await prisma.link.create({
        data: {
            description: 'Fullstack tutorial for GraphQL',
            url: 'www.howtographql.com'
        }
    })
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => await prisma.$disconnect())

