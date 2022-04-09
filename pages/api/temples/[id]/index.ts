import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Temple, TempleObjects } from '@/lib/db/models'


async function getTemple(req: NextApiRequest, res: NextApiResponse<Temple|ResponseError>) {
  const templeId: number = parseInt(req.query.id.toString())
  try {
    const temple = await TempleObjects().where('id', templeId).first()
    if (!temple) {
      res.status(404).json({ 'detail': 'Not Found' })
    } else {
      res.status(200).json(temple)
    }
  } catch(err) {
    console.log(err)
    res.status(500).json({ 'detail': 'server error' })
  }
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Temple|ResponseError>
) {
  switch (req.method) {
    case 'GET':
      await getTemple(req, res)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).json({ 'detail': `Method ${req.method} Not Allowed` })
  }
}
