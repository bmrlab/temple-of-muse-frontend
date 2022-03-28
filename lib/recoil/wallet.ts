import { atom, selector } from 'recoil'

export const walletAddressState = atom({
  key: 'walletAddress',
  default: '',
})
