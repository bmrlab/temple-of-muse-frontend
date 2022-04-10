export type NFTData = {
  contract: {
    address: string
  },
  tokenId: string,
  title: string,
  tokenUri: string,
  mediaUri: string,
}

export type NFTsResponseData = {
  pageKey: string,
  totalCount: number,
  results: Array<NFTData>
}
