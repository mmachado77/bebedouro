const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function POST() {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    //   },
    //   body: JSON.stringify({ time: new Date().toISOString() }),
    // })
   
    // const data = await res.json()
    await prisma.bebeu.create();
    return Response.json({message:"recebido com sucesso"})
  }