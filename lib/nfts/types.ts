export type NFTData = {
  contract: {
    address: string
  },
  tokenId: string,
  name: string,
  tokenUri: string,
  mediaUri: string,
}

export type NFTsResponseData = {
  next?: string,
  previous?: string,
  results: Array<NFTData>
}
