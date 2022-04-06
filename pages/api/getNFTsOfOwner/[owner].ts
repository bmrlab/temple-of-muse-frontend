// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ethers } from 'ethers'

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const AlchemyAPI = axios.create({
  baseURL: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}/`
})

type NFTData = {
  contract: {
    address: string
  },
  tokenId: string,
  title: string,
  tokenUri: string,
  mediaUri: string,
  // metadata: { [key: string]: any } & {
  //   image: string
  // }
}

type ResponseData = {
  pageKey: string,
  totalCount: number,
  results: Array<NFTData>
}

const getNFTs = async function(ownerAddress: string, _pageKey?: string): Promise<ResponseData> {
  const params: any = { owner: ownerAddress }
  if (_pageKey) {
    params.pageKey = _pageKey
  }
  const res = await AlchemyAPI.get('getNFTs/', { params })
  const { pageKey, totalCount, ownedNfts } = res.data
  const results = ownedNfts.map((nft: any): NFTData => {
    return {
      contract: { address: nft.contract.address },
      tokenId: ethers.BigNumber.from(nft.id.tokenId).toString(),
      title: nft.title,
      tokenUri: nft.tokenUri.gateway,
      mediaUri: nft.media[0]?.gateway,
    }
  })
  return { pageKey, totalCount, results }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | string>
) {
  const ownerAddress = (req.query.owner ?? '').toString()
  const _pageKey = (req.query.pageKey ?? '').toString()
  try {
    const result = await getNFTs(ownerAddress, _pageKey)
    res.status(200).json(result)
  } catch(err) {
    res.status(500).send('server error')
  }
}
