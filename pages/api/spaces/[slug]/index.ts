import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Space, MediaSlot } from '@prisma/client'
import prisma from '@/lib/prisma'

type ResponseData = Space & {
  mediaSlots: MediaSlot[]
}

async function getSpace(req: NextApiRequest, res: NextApiResponse<ResponseData|ResponseError>) {
  const slug: string = (req.query.slug ?? '').toString()
  try {
    const space = await prisma.space.findUnique({
      where: { slug },
      include: {
        mediaSlots: true,
      },
    })
    if (!space) {
      res.status(404).json({ 'detail': 'Not Found' })
    } else {
      res.status(200).json(space)
    }
  } catch(err) {
    console.log(err)
    res.status(500).json({ 'detail': 'server error' })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData|ResponseError>
) {
  switch (req.method) {
    case 'GET':
      await getSpace(req, res)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).json({ 'detail': `Method ${req.method} Not Allowed` })
  }
}
