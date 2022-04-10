import axios from 'axios'
import { NFTData, NFTsResponseData } from './types'

export const getNFTs = async (walletAddress: string, _pageKey?: string): Promise<NFTsResponseData> => {
  const res = await axios.get(`/api/getNFTsOfOwner/${walletAddress}`, {
    params: {
      pageKey: _pageKey
    }
  })
  return res.data
}

export const cdnMediaUri = (mediaUri: string): string => {
  const regExp = new RegExp('^(https?:\/\/ipfs\.io\/ipfs\/|ipfs:\/\/)')
  if (regExp.test(mediaUri)) {
    mediaUri = mediaUri.replace(regExp, 'https://cloudflare-ipfs.com/ipfs/')
  } else if (/^https?/.test(mediaUri)) {
    mediaUri =
      'https://media-cdn.templeofmuse.xyz/api/media-cdn/' +
      encodeURIComponent(btoa(mediaUri))
  }
  return mediaUri
}

export type { NFTData, NFTsResponseData }
