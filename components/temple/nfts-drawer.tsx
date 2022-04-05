import clsx from 'clsx'
import { useRecoilValue } from 'recoil'
import { useEffect, useState, useRef, useCallback } from 'react'
import NFTs from '@/components/nfts/list'
import { walletAddressState } from '@/lib/recoil/wallet'


export default function NFTsDrawer() {
  const walletAddress = useRecoilValue(walletAddressState)
  return (
    <div className={clsx(
      'absolute left-0 top-0 w-80 h-full bg-black overflow-auto'
    )}>
      {walletAddress ? (
        <NFTs walletAddress={walletAddress} />
      ) : (
        <div className='text-center my-12'>Please connect your wallet to view assets.</div>
      )}
    </div>
  )
}
