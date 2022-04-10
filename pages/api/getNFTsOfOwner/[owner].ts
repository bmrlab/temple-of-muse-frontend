// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ethers } from 'ethers'
import { NFTData, NFTsResponseData } from '@/lib/nfts/types'

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const AlchemyAPI = axios.create({
  baseURL: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}/`
})

const getNFTs = async function(
  ownerAddress: string,
  _next?: string,
  _previous?:string
): Promise<NFTsResponseData> {
  const params: any = { owner: ownerAddress }
  if (_next) { params.next = _next }
  if (_previous) { params.previous = _previous }
  const res = await AlchemyAPI.get('getNFTs/', { params })
  const { pageKey, ownedNfts } = res.data
  const results = ownedNfts.map((nft: any): NFTData => {
    return {
      contract: { address: nft.contract.address },
      tokenId: ethers.BigNumber.from(nft.id.tokenId).toString(),
      name: nft.title,
      tokenUri: nft.tokenUri.gateway,
      mediaUri: nft.media[0]?.gateway,
    }
  })
  return { next: pageKey, results }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTsResponseData|ResponseError>
) {
  const ownerAddress = (req.query.owner ?? '').toString()
  const _next = (req.query.next ?? '').toString()
  try {
    const result = await getNFTs(ownerAddress, _next)
    res.status(200).json(result)
  } catch(err) {
    console.log(err)
    res.status(500).send({ 'detail': 'server error' })
  }
}
