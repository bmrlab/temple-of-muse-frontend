import clsx from 'clsx'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useRecoilState } from 'recoil'
import { walletAddressState } from '@/lib/recoil/wallet'

const maskedAddress = (address: string) => address.toLowerCase().replace(/0x(\w{4})\w+(\w{4})/, '0x$1...$2')

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: 'https://eth-mainnet.alchemyapi.io/v2/SjdU6lodzNjnVpJMFQPRtl4SoEzJfCLG'
      },
    }
  }
}

const ClickToConnect = ({ connect=()=>{} }: { connect?: Function }) => {
  return (
    <button className={clsx(
      'border border-white hover:border-white/75 hover:text-white/75',
      'rounded-full text-xs sm:text-sm px-4 py-1',
    )} onClick={() => connect()}>Connect Wallet</button>
  )
}

export default function ConnectButton() {
  const [walletAddress, setWalletAddress] = useRecoilState(walletAddressState)

  if (typeof window === 'undefined') {
    return <ClickToConnect />
  }

  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: providerOptions,
  })

  async function connect() {
    const instance = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(instance)
    const signer = provider.getSigner()
    setWalletAddress(await signer.getAddress())
  }

  function disconnect() {
    web3Modal.clearCachedProvider()
    setWalletAddress('')
  }

  if (web3Modal.cachedProvider) {
    connect()
  }

  return walletAddress ? (
    <div className={clsx(
      'border border-white hover:border-white/75 hover:text-white/75',
      'rounded-full text-xs sm:text-sm px-4 py-1',
      'cursor-pointer'
    )} onClick={disconnect}>{maskedAddress(walletAddress)}</div>
  ) : (
    <ClickToConnect connect={connect} />
  )
}
