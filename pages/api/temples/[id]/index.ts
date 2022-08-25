import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Temple, NFTSlot, TempleObjects, NFTSlotObjects } from '@/lib/db/models'

type ResponseData = Temple & {
  slots: Array<NFTSlot>
}

async function getTemple(req: NextApiRequest, res: NextApiResponse<ResponseData|ResponseError>) {
  const templeId: number = +(req.query.id ?? '')
  try {
    const temple = await TempleObjects().where('id', templeId).first()
    if (!temple) {
      res.status(404).json({ 'detail': 'Not Found' })
    } else {
      const slots = await NFTSlotObjects().where('temple_id', temple.id)
      res.status(200).json({ ...temple, slots })
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
      await getTemple(req, res)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).json({ 'detail': `Method ${req.method} Not Allowed` })
  }
}
