import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Temple, TempleObjects } from '@/lib/db/models'


type ResponseData = {
  results: Array<Temple>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData|ResponseError>
) {
  const results = await TempleObjects()
  try {
    res.status(200).json({ results })
  } catch(err) {
    console.log(err)
    res.status(500).send({ 'detail': 'server error' })
  }
}
