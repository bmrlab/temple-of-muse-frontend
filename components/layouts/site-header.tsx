import clsx from 'clsx'
import styles from './site-header.module.css'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { useRecoilState } from 'recoil'
import { walletAddressState } from '../../lib/recoil/wallet'

const providerOptions = {
  /* See Provider Options Section */
}

export default function SiteHeader() {
  const [walletAddress, setWalletAddress] = useRecoilState(walletAddressState)

  async function connect() {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
      providerOptions: providerOptions,
    })
    const instance = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(instance)
    const signer = provider.getSigner()
    setWalletAddress(await signer.getAddress())
  }

  return (
    <header className={clsx(
      styles.header,
      // 'bg-red-700',
      'relative z-10',
      'flex flex-row',
      'justify-between items-center',
      'h-20 px-4'
    )}>
      <div className='flex flex-row justify-start items-end'>
        <div className={clsx('w-8 h-8 mr-1', styles.logo)}>{/*logo*/}</div>
        <span className='text-grandslang text-lg -mb-2'>Temple OF Muse</span>
      </div>
      <div className='flex-1'>
        {/* placeholder */}
      </div>
      <div className='hidden sm:block'>
        {walletAddress ? (
          <div className={clsx(
            'border border-white hover:border-white/75 hover:text-white/75',
            'rounded-full px-4 py-1',
          )}>{walletAddress}</div>
        ) : (
          <button className={clsx(
            'border border-white hover:border-white/75 hover:text-white/75',
            'rounded-full px-4 py-1',
          )} onClick={connect}>Connect Wallet</button>
        )}
      </div>
    </header>
  )
}
