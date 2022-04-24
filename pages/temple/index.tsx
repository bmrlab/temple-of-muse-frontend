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


async function saveNFTSlot(slotKey: string, nft: NFTData) {
  const templeId = 1
  try {
    await axios.post(`/api/temples/${templeId}/set-nft-slot`, {
      slot_key: slotKey,
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
        slotKey: slot.slot_key,
        imageURL: cdnMediaUri(slot.media_uri),
      }
      unityInstance.SendMessage('NFT_Manager', 'SetImage', JSON.stringify(payload))
    }
  } catch(err) {
    console.log(err)
  }
}

const Temple: NextLayoutPage = () => {
  let [loadingProgress, setLoadingProgress] = useState(0)
  let [drawerVisible, setDrawerVisible] = useState(false)
  let [nftSlot, setNFTSlot] = useState('')
  let [nftSlot3D, setNFTSlot3D] = useState('')

  useEffect(() => {
    let updateProgress = (progress: number) => setLoadingProgress(Math.floor(progress * 100))
    renderWebGL(updateProgress, window.innerHeight - 200)
    const listener = (e: any) => {
      setNFTSlot(e.detail)
      setNFTSlot3D('')
      setDrawerVisible(true)
    }
    const listener3D = (e: any) => {
      setNFTSlot('')
      setNFTSlot3D(e.detail)
      setDrawerVisible(true)
    }
    document.addEventListener('selectSlot', listener)
    document.addEventListener('selectSlot3d', listener3D)
    return () => {
      updateProgress = () => {}
      document.removeEventListener('selectSlot', listener)
      document.removeEventListener('selectSlot3d', listener3D)
    }
  }, [])

  useEffect(() => {
    if (loadingProgress >= 100) {
      fillSlots()
    }
  }, [loadingProgress])

  const onSelectNFT = useCallback((nft: NFTData) => {
    const unityInstance = (window as any).unityInstance
    if (nftSlot) {
      const payload = {
        slotKey: nftSlot,
        imageURL: cdnMediaUri(nft.mediaUri),
      }
      unityInstance.SendMessage('NFT_Manager', 'SetImage', JSON.stringify(payload))
      saveNFTSlot(nftSlot, nft)
    } else if (nftSlot3D) {
      const payload = {
        slotKey: nftSlot3D,
        // modelURL: cdnMediaUri(nft.mediaUri),
        modelURL: 'https://api.ogcrystals.com/api/v1/crystals/assets/glb/8358/1.glb',
      }
      unityInstance.SendMessage('NFT_Manager', 'Set3dModelOnly', JSON.stringify(payload))
    }
    setDrawerVisible(false)
  }, [nftSlot, nftSlot3D])

  const addEmpty3DModel = useCallback(() => {
    const unityInstance = (window as any).unityInstance
    unityInstance.SendMessage('NFT_Manager', 'AddEmpty3dModel', '')
    // unityInstance.SendMessage('Sun','SetDate','{year:0,month:0.day:0}')
  }, [])

  return (
    <div className='relative'>
      <canvas id='unity-canvas'></canvas>
      <ProgressCover loadingProgress={loadingProgress} />
      <NFTsDrawer visible={drawerVisible} onSelectNFT={onSelectNFT} />
      <div
        className={clsx(
          'absolute bottom-2 right-2',
          'py-1 px-4 text-xs rounded-full border border-white cursor-pointer',
        )}
        onClick={addEmpty3DModel}
      >Add Empty 3D Model</div>
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
