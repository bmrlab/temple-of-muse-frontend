import clsx from 'clsx'
import type { NextLayoutPage } from 'next'
import { useRecoilValue } from 'recoil'
import Layout from '@/components/layout'
import NFTs from '@/components/nfts'
import { walletAddressState } from '@/lib/recoil/wallet'

const Assets: NextLayoutPage = () => {
  const walletAddress = useRecoilValue(walletAddressState)
  return (
    <div className='container mx-auto'>
      {walletAddress ? (
        <NFTs walletAddress={walletAddress} />
      ) : (
        <span>Connect</span>
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
