// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const AlchemyAPI = axios.create({
  baseURL: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}/`
})

type NFTData = {
  contract: {
    address: string
  },
  tokenId: number,
  tokenUri: string,
  metadata: { [key: string]: any } & {
    image: string
  }
}

const getNFTs = async function(ownerAddress: string): Promise<Array<NFTData>> {
  const res = await AlchemyAPI.get('getNFTs/', {
    params: {
      owner: ownerAddress
    }
  })
  const { ownedNfts } = res.data
  return ownedNfts.map((nft: any): NFTData => {
    return {
      contract: { address: nft.contract.address },
      tokenId: +nft.id.tokenId,
      tokenUri: nft.tokenUri.gateway,
      metadata: {
        // ...nft.metadata,
        image: nft.metadata.image
      }
    }
  })
}

type Data = {
  ownedNfts: Array<NFTData>
} | string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ownerAddress = req.query.owner.toString()
  try {
    const ownedNfts = await getNFTs(ownerAddress)
    res.status(200).json({ ownedNfts })
  } catch(err) {
    res.status(500).send('server error')
  }
}
