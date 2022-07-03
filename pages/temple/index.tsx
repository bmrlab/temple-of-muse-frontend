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
import shareIcon from '../../assets/images/share-icon.png'

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

async function removeNFTSlot(slotKey: string) {
  const templeId = 1
  try {
    await axios.post(`/api/temples/${templeId}/remove-nft-slot`, {
      slot_key: slotKey,
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
  let [maskVisible, setMaskVisible] = useState(false)
  let [nftSlot, setNFTSlot] = useState('')
  let [nftSlot3D, setNFTSlot3D] = useState('')

  useEffect(() => {
    let updateProgress = (progress: number) => setLoadingProgress(Math.floor(progress * 100))
    renderWebGL(updateProgress, window.innerHeight - 80) // 200)
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
      setMaskVisible(true)
    }
  }, [loadingProgress])

  const onSelectNFT = useCallback((nft: NFTData|null) => {
    const unityInstance = (window as any).unityInstance
    if (nftSlot) {
      if (nft === null) {
        const payload = {
          slotKey: nftSlot,
          imageURL: 'https://www.templeofmuse.xyz/logo-white.png',
        }
        unityInstance.SendMessage('NFT_Manager', 'SetImage', JSON.stringify(payload))
        removeNFTSlot(nftSlot)
      } else {
        const payload = {
          slotKey: nftSlot,
          imageURL: cdnMediaUri(nft.mediaUri),
        }
        unityInstance.SendMessage('NFT_Manager', 'SetImage', JSON.stringify(payload))
        saveNFTSlot(nftSlot, nft)
      }
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
      {maskVisible && <div className={clsx(
        'absolute z-10 left-0 top-0 w-full h-full bg-black/50',
        'flex items-center justify-center',
      )}>
        <div className='p-4 cursor-pointer' onClick={() => setMaskVisible(false)}>Click to edit</div>
      </div>}
      {!maskVisible && <>
        <a
          className='block absolute top-4 right-4 cursor-pointer opacity-90 w-8 h-8 rounded-full bg-black bg-no-repeat bg-center bg-[length:50%_auto]'
          style={{'backgroundImage': `url(${shareIcon.src})`}}
          href='/s/bmrlab' target='_blank'
        ></a>
        <div
          className='absolute top-4 left-4 cursor-pointer py-1 px-4 text-xs rounded-full border border-white'
          onClick={addEmpty3DModel}
        >Add Empty 3D Model</div>
      </>}
      <ProgressCover loadingProgress={loadingProgress} />
      <NFTsDrawer visible={drawerVisible} onSelectNFT={onSelectNFT} />
    </div>
  )
}


Temple.getLayout = function getLayout(page) {
  return (
    <Layout footer={false}>
      {page}
    </Layout>
  )
}

export default Temple
