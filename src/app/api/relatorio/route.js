const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function GET(request) {

  const bebeus = await prisma.bebeu.findMany();
   
    return Response.json( bebeus )
  }
  
  export const revalidate = 10