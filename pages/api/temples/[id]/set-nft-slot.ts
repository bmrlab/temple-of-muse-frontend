import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Temple, NFTSlot, NFTSlotObjects } from '@/lib/db/models'


async function setNFTSlot(req: NextApiRequest, res: NextApiResponse<NFTSlot|ResponseError>) {
  const templeId: number = parseInt(req.query.id.toString())
  const { slot_key, media_uri, contract_address, token_id } = req.body
  try {
    const payload = {
      slot_key,
      media_uri,
      contract_address,
      token_id,
      temple_id: templeId,
    }
    const queryset = NFTSlotObjects().where({slot_key, temple_id : templeId})
    let obj = await queryset.first()
    let id
    if (obj) {
      id = obj.id
      await NFTSlotObjects().where({ id }).update(payload)
    } else {
      [id] = await NFTSlotObjects().insert([payload])
    }
    obj = await NFTSlotObjects().where({ id }).first()
    res.status(200).json(obj!)
  } catch(err) {
    console.log(err)
    res.status(500).json({ 'detail': 'server error' })
  }
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTSlot|ResponseError>
) {
  switch (req.method) {
    case 'POST':
      await setNFTSlot(req, res)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).json({ 'detail': `Method ${req.method} Not Allowed` })
  }
}
