// curl --header "X-API-KEY: [YOUR_API_KEY]" --request GET -i --url 'https://api.opensea.io/api/v1/assets'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.end('success')
}
