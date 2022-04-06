import axios from 'axios'
import CORS from 'cors'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  await new Promise((resolve, reject) => {
    const cors = CORS({
      methods: ['GET', 'OPTIONS'],
    })
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
  // https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.js
  const key = (req.query.key ?? '').toString()
  const url = Buffer.from(key, 'base64').toString()
  try {
    const response = await axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    })
    const contentType = response.headers['content-type']
    res.setHeader('Content-Type', contentType)
    res.setHeader('Cache-Control', 'public, max-age=2592000');
    response.data.pipe(res)
  } catch(err) {
    console.log(err)
    res.status(500).send('server error')
  }
}
