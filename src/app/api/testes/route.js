const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function GET(request) {
    // const { searchParams } = new URL(request.url)
    // const id = searchParams.get('id')
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    //   },
    // })
    // const product = await res.json()
  const bebeus = await prisma.bebeu.findMany();
   
    return Response.json({ bebeus })
  }