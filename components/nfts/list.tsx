import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { getNFTs, NFTData } from '@/lib/nfts'

type Props = {
  walletAddress: string
}

export default function NFTs({ walletAddress }: Props) {
  let [pending, setPending] = useState<Boolean>(false)
  let [nfts, setNFTs] = useState<Array<NFTData>>([])
  let [pageKey, setPageKey] = useState<string|undefined>()

  useEffect(() => {
    setPending(true)
    getNFTs(walletAddress).then((data) => {
      setNFTs([ ...data.results ])
      setPageKey(data.pageKey)
      setPending(false)
    })
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
