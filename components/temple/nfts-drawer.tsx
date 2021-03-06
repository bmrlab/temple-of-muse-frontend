import clsx from 'clsx'
import { useRecoilValue } from 'recoil'
import { useEffect, useState, useRef, useCallback } from 'react'
import { walletAddressState } from '@/lib/recoil/wallet'
import { getNFTs, cdnMediaUri, NFTData, NFTsResponseData } from '@/lib/nfts'
import styles from './nfts-drawer.module.css'


const NFTList = ({ nfts, onSelectNFT }: { nfts: NFTsResponseData, onSelectNFT: Function }) => {
  // const results = nfts.results
  //   .filter((nft) => nft.mediaUri && !/(^data:)|(\.(mp4|gif)$)/.test(nft.mediaUri))
  const results = [ ...nfts.results ]
  return (
    <div className='w-full flex items-center justify-center flex-wrap py-4 px-2'>
      <button
        className='cursor-pointer w-full text-sm mb-2'
        onClick={() => onSelectNFT(null)}
      >clear slot</button>
      {results.map((nft) => {
        return (
          <div className='block p-2 w-1/2' key={`${nft.contract.address}/${nft.tokenId}`}>
            <div
              className='rounded-md overflow-hidden bg-white text-black cursor-pointer'
              onClick={() => onSelectNFT(nft)}
            >
              <div
                className='w-full pt-[100%] bg-no-repeat bg-center bg-cover'
                style={{'backgroundImage': `url(${cdnMediaUri(nft.mediaUri)})`}}
              ></div>
              <div className='h-16 p-2 font-bold'>
                <div style={{
                  'display': '-webkit-box',
                  'WebkitLineClamp': '2',
                  'WebkitBoxOrient': 'vertical',
                  'overflow': 'hidden',
                }}>{nft.name}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function NFTsDrawer({ visible, onSelectNFT }: { visible: boolean, onSelectNFT: Function }) {
  const walletAddress = useRecoilValue(walletAddressState)

  let [pending, setPending] = useState<Boolean>(false)
  let [nfts, setNFTs] = useState<NFTsResponseData>({results:[]})

  useEffect(() => {
    if (!walletAddress) {
      return
    }
    setPending(true)
    getNFTs(walletAddress).then((data) => {
      setNFTs({ ...data })
      setPending(false)
    })
  }, [walletAddress])

  return (
    <div className={clsx(
      styles.drawerWrapper,
      'absolute z-10 left-0 top-0 w-80 h-full bg-black overflow-auto',
      'transition-all duration-300 ease-in-out',
      visible ? 'translate-x-0' : '-translate-x-full'
    )}>
      {walletAddress ? (
        <>
          {pending && <div className='p-4 text-center'>loading ...</div>}
          {!pending && <NFTList nfts={nfts} onSelectNFT={onSelectNFT}/>}
        </>
      ) : (
        <div className='text-center my-12'>Please connect your wallet to view assets.</div>
      )}
    </div>
  )
}
