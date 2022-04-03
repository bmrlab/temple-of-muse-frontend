import clsx from 'clsx'
import styles from './site-header.module.css'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { useRecoilState } from 'recoil'
import { walletAddressState } from '@/lib/recoil/wallet'

const maskedAddress = (address: string) => address.toLowerCase().replace(/0x(\w{4})\w+(\w{4})/, '0x$1...$2')

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
      'h-16 sm:h-20 px-4'
    )}>
      <div className='flex flex-row justify-start items-end'>
        <div className={clsx('w-6 h-6 sm:w-8 sm:h-8 mb-2 mr-1', styles.logo)}>{/*logo*/}</div>
        <span className='text-grandslang text-base sm:text-lg'>Temple OF Muse</span>
      </div>
      <div className='flex-1'>
        {/* placeholder */}
      </div>
      {walletAddress ? (
        <div className={clsx(
          'border border-white hover:border-white/75 hover:text-white/75',
          'rounded-full text-xs sm:text-sm px-4 py-1',
        )}>{maskedAddress(walletAddress)}</div>
      ) : (
        <button className={clsx(
          'border border-white hover:border-white/75 hover:text-white/75',
          'rounded-full text-xs sm:text-sm px-4 py-1',
        )} onClick={connect}>Connect Wallet</button>
      )}
    </header>
  )
}
