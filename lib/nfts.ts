import axios from 'axios'

export type NFTData = {
  contract: {
    address: string
  },
  tokenId: string,
  tokenUri: string,
  mediaUri: string,
}

export type NFTsResponseData = {
  pageKey: string,
  totalCount: number,
  results: Array<NFTData>
}

export const getNFTs = async (walletAddress: string, _pageKey?: string): Promise<NFTsResponseData> => {
  const res = await axios.get(`/api/getNFTsOfOwner/${walletAddress}`, {
    params: {
      pageKey: _pageKey
    }
  })
  return res.data
}
