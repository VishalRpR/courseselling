import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function db() {
    const user = await prisma.user.create({
      data: { name: 'Alice', email: 'alice@prisma.io' }
    })
    console.log(user)
  }
  

