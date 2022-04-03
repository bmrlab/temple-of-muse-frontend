import clsx from 'clsx'
import axios from 'axios'
import { useRecoilState } from 'recoil'

type Props = {
  walletAddress
}

export default function NFTs({ walletAddress }: Props) {
  return (
    <span>
      {walletAddress}
    </span>
  )
}
