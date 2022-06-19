// curl --header "X-API-KEY: [YOUR_API_KEY]" --request GET -i --url 'https://api.opensea.io/api/v1/assets'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ethers } from 'ethers'
import { NFTData, NFTsResponseData } from '@/lib/nfts/types'

const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY
const OpenSeaAPI = axios.create({
  baseURL: 'https://api.opensea.io/api/v1/',
  headers: {
    'X-API-KEY': OPENSEA_API_KEY || ''
  }
})

const getNFTs = async function(
  ownerAddress: string,
  _next?: string,
  _previous?:string
): Promise<NFTsResponseData> {
  const params: any = { owner: ownerAddress }
  if (_next) { params.next = _next }
  if (_previous) { params.previous = _previous }
  const res = await OpenSeaAPI.get('assets/', { params })
  const { next, previous, assets } = res.data
  const results = assets.map((nft: any): NFTData => {
    return {
      contract: { address: nft.asset_contract.address },
      tokenId: nft.token_id,
      name: nft.name,
      tokenUri: nft.token_metadata,
      mediaUri: nft.image_url,
    }
  })
  return { next, previous, results }
}

const getBMRNFTs = async function(
  ownerAddress: string,
  _next?: string,
  _previous?:string
): Promise<NFTsResponseData> {
  const params: any = { owner: ownerAddress }
  if (_next) { params.next = _next }
  if (_previous) { params.previous = _previous }
  const res = await axios.get('https://bmr.art/api/bmrs')
  const results = res.data.results.map((nft: any): NFTData => {
    return {
      contract: { address: '0x0000000000000000000000000000000000000000' },
      tokenId: nft.generateId,
      name: nft.name,
      tokenUri: nft.image,
      mediaUri: nft.image,
    }
  })
  return { results }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTsResponseData|ResponseError>
) {
  const ownerAddress = (req.query.owner ?? '').toString()
  const _next = (req.query.next ?? '').toString()
  try {
    // const result = await getNFTs(ownerAddress, _next)
    const result = await getBMRNFTs(ownerAddress, _next)
    res.status(200).json(result)
  } catch(err) {
    console.log(err)
    res.status(500).send({ 'detail': 'server error' })
  }
}
