import clsx from 'clsx'
import axios from 'axios'
import type { NextPage } from 'next'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import renderWebGL from '@/components/temple/render-webgl'
import ProgressCover from '@/components/temple/progress-cover'
import { cdnMediaUri, NFTData } from '@/lib/nfts'


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

const Temple: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  let [loadingProgress, setLoadingProgress] = useState(0)
  let [drawerVisible, setDrawerVisible] = useState(false)
  let [nftSlot, setNFTSlot] = useState('')

  useEffect(() => {
    let updateProgress = (progress: number) => setLoadingProgress(Math.floor(progress * 100))
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
  }, [slug])

  useEffect(() => {
    if (loadingProgress >= 100) {
      fillSlots()
    }
  }, [slug, loadingProgress])

  if (!slug) {
    return <div />
  } else if (slug !== 'bmrlab') {
    return <Error statusCode={404} />
  }

  return (
    <div className='relative min-h-screen'>
      <canvas id='unity-canvas'></canvas>
      <ProgressCover loadingProgress={loadingProgress} />
    </div>
  )
}

export default Temple
