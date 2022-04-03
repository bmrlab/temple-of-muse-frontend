import clsx from 'clsx'
import axios from 'axios'
import { useEffect, useState } from 'react'


type NFTData = {
  contract: {
    address: string
  },
  tokenId: number,
  tokenUri: string,
  mediaUri: string,
}

type ResponseData = {
  pageKey: string,
  totalCount: number,
  results: Array<NFTData>
}

type Props = {
  walletAddress: string
}

export default function NFTs({ walletAddress }: Props) {
  let [pending, setPending] = useState<Boolean>(false)
  let [nfts, setNFTs] = useState<Array<NFTData>>([])
  let [pageKey, setPageKey] = useState<string|undefined>()

  const getNFTs = async (walletAddress: string, _pageKey?: string) => {
    setPending(true)
    const res = await axios.get(`/api/getNFTsOfOwner/${walletAddress}`, {
      params: {
        pageKey: _pageKey
      }
    })
    const data = res.data as ResponseData
    setNFTs([ ...data.results ])
    setPageKey(data.pageKey)
    setPending(false)
  }

  useEffect(() => {
    getNFTs(walletAddress)
  }, [walletAddress])

  return (
    <div className='w-full flex items-center justify-center flex-wrap py-12'>
      {pending && (
        <div>loading ...</div>
      )}
      {!pending && nfts.map((nft) => {
        return (
          <a
            className='block m-6 w-80'
            key={`${nft.contract.address}/${nft.tokenId}`}
            href={`https://opensea.io/assets/${nft.contract.address}/${nft.tokenId}`}
            rel='noreferrer' target='_blank'
          >
            <div
              className='w-full pt-[100%] bg-no-repeat bg-center bg-contain'
              style={{'backgroundImage': `url(${nft.mediaUri})`}}
            ></div>
          </a>
        )
      })}
    </div>
  )
}
