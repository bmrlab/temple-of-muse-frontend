import clsx from 'clsx'
import type { NextLayoutPage } from 'next'
import { useRecoilValue } from 'recoil'
import Layout from '@/components/layout'
import NFTs from '@/components/nfts/list'
import { walletAddressState } from '@/lib/recoil/wallet'

const Assets: NextLayoutPage = () => {
  const walletAddress = useRecoilValue(walletAddressState)
  return (
    <div className='container mx-auto'>
      {walletAddress ? (
        <NFTs walletAddress={walletAddress} />
      ) : (
        <div className='text-center my-12'>Please connect your wallet to view assets.</div>
      )}
    </div>
  )
}

Assets.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Assets
