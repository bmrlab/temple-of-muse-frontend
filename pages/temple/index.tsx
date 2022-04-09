import clsx from 'clsx'
import axios from 'axios'
import type { NextLayoutPage } from 'next'
import { useEffect, useState, useCallback } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import renderWebGL from '@/components/temple/render-webgl'
import ProgressCover from '@/components/temple/progress-cover'
import NFTsDrawer from '@/components/temple/nfts-drawer'
import { cdnMediaUri, NFTData } from '@/lib/nfts'

async function saveNFTSlot(slotkey: string, nft: NFTData) {
  const templeId = 1
  try {
    await axios.post(`/api/temples/${templeId}/set-nft-slot`, {
      slot_key: slotkey,
      media_uri: nft.mediaUri,
      contract_address: nft.contract.address,
      token_id: nft.tokenId,
    })
  } catch(err) {
    console.log(err)
  }
}

async function fillSlots() {
  const unityInstance = (window as any).unityInstance
  if (!unityInstance) {
    console.log('unityInstance not ready, retry in 1s')
    setTimeout(() => fillSlots(), 1000)
    return
  }
  const templeId = 1
  try {
    const res = await axios.get(`/api/temples/${templeId}`)
    const { slots } = res.data
    for (const slot of slots) {
      const payload = {
        slotkey: slot.slot_key,
        imageUrl: cdnMediaUri(slot.media_uri),
      }
      unityInstance.SendMessage('NFT_Manager', 'SetImage', JSON.stringify(payload))
    }
  } catch(err) {
    console.log(err)
  }
}

const Temple: NextLayoutPage = () => {
  let [loadingProgress, setProgress] = useState(0)
  let [drawerVisible, setDrawerVisible] = useState(false)
  let [nftSlot, setNFTSlot] = useState('')

  useEffect(() => {
    let updateProgress = (progress: number) => setProgress(Math.floor(progress * 100))
    renderWebGL(updateProgress)
    const listener = (e: any) => {
      setNFTSlot(e.detail)
      setDrawerVisible(true)
    }
    document.addEventListener('selectSlot', listener)
    return () => {
      updateProgress = () => {}
      document.removeEventListener('selectSlot', listener)
    }
  }, [])

  useEffect(() => {
    if (loadingProgress >= 100) {
      fillSlots()
    }
  }, [loadingProgress])

  const onSelectNFT = useCallback((nft: NFTData) => {
    const payload = {
      slotkey: nftSlot,
      imageUrl: cdnMediaUri(nft.mediaUri),
    }
    const unityInstance = (window as any).unityInstance
    unityInstance.SendMessage('NFT_Manager', 'SetImage', JSON.stringify(payload))
    saveNFTSlot(nftSlot, nft)
    setDrawerVisible(false)
  }, [nftSlot])

  return (
    <div className='relative'>
      <canvas id='unity-canvas'></canvas>
      <ProgressCover progress={loadingProgress} />
      <NFTsDrawer visible={drawerVisible} onSelectNFT={onSelectNFT} />
    </div>
  )
}


Temple.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Temple
