import clsx from 'clsx'
import type { NextLayoutPage } from 'next'
import { useEffect, useState, useCallback } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import renderWebGL from '@/components/temple/render-webgl'
import ProgressCover from '@/components/temple/progress-cover'
import NFTsDrawer from '@/components/temple/nfts-drawer'
import { cdnMediaUri } from '@/lib/nfts'

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

  const onSelectNFT = useCallback((nft) => {
    const payload = {
      slotkey: nftSlot,
      imageUrl: cdnMediaUri(nft.mediaUri),
    }
    const unityInstance = (window as any).unityInstance
    unityInstance.SendMessage('NFT_Manager', 'SetImage', JSON.stringify(payload))
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
