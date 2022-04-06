import clsx from 'clsx'
import type { NextLayoutPage } from 'next'
import { useEffect, useState, useCallback } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import renderWebGL from '@/components/temple/render-webgl'
import ProgressCover from '@/components/temple/progress-cover'
import NFTsDrawer from '@/components/temple/nfts-drawer'

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
    const cdnURL =
      'https://media-cdn.templeofmuse.xyz/api/media-cdn/' +
      encodeURIComponent(btoa(nft.mediaUri))
    const payload = JSON.stringify({
      slotkey: nftSlot,
      imageUrl: cdnURL,
    })
    const unityInstance = (window as any).unityInstance
    unityInstance.SendMessage('NFT_Manager', 'SetImage', payload)
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
