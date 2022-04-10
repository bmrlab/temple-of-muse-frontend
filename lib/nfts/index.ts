import axios from 'axios'
import { NFTData, NFTsResponseData } from './types'

export const getNFTs = async (walletAddress: string, _next?: string): Promise<NFTsResponseData> => {
  const res = await axios.get('/api/nfts', {
    params: {
      next: _next,
      owner: walletAddress
    }
  })
  return res.data
}

export const cdnMediaUri = (mediaUri: string): string => {
  const ipfsRegExp = new RegExp('^(https?:\/\/ipfs\.io\/ipfs\/|ipfs:\/\/)')
  const openseaRegExp = new RegExp('^https?:\/\/lh3\.googleusercontent\.com\/')
  if (ipfsRegExp.test(mediaUri)) {
    mediaUri = mediaUri.replace(ipfsRegExp, 'https://cloudflare-ipfs.com/ipfs/')
  } else if (openseaRegExp.test(mediaUri)) {
    // do nothing
  } else if (/^https?/.test(mediaUri)) {
    mediaUri =
      'https://media-cdn.templeofmuse.xyz/api/media-cdn/' +
      encodeURIComponent(btoa(mediaUri))
  }
  return mediaUri
}

export type { NFTData, NFTsResponseData }
