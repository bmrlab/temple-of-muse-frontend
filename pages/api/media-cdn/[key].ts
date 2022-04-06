import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  const key = (req.query.key ?? '').toString()
  const url = Buffer.from(key, 'base64').toString()
  try {
    const response = await axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    })
    const contentType = response.headers['content-type']
    res.setHeader('content-type', contentType)
    response.data.pipe(res)
  } catch(err) {
    res.status(500).send('server error')
  }
}
