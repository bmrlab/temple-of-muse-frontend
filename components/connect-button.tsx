import clsx from 'clsx'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useRecoilState } from 'recoil'
import { walletAddressState } from '@/lib/recoil/wallet'

const maskedAddress = (address: string) => address.toLowerCase().replace(/0x(\w{4})\w+(\w{4})/, '0x$1...$2')

const WEB3: {
  getModal: Function,
  providerOptions: any,
  _modal: Web3Modal | null
} = {
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          1: 'https://eth-mainnet.alchemyapi.io/v2/SjdU6lodzNjnVpJMFQPRtl4SoEzJfCLG'
        }
      }
    }
  },
  getModal: function() {
    if (!this._modal) {
      this._modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions: this.providerOptions,
      })
    }
    return this._modal
  },
  _modal: null,
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
  async function connect() {
    const web3Modal = WEB3.getModal()
    const instance = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(instance)
    const signer = provider.getSigner()
    setWalletAddress(await signer.getAddress())
  }

  function disconnect() {
    const web3Modal = WEB3.getModal()
    web3Modal.clearCachedProvider()
    setWalletAddress('')
  }

  useEffect(() => {
    const web3Modal = WEB3.getModal()
    if (web3Modal.cachedProvider) {
      connect()
    }
  })

  if (typeof window === 'undefined') {
    return <ClickToConnect />
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
