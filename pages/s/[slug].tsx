import clsx from 'clsx'
import axios from 'axios'
import type { NextPage } from 'next'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Space, MediaSlot } from '@prisma/client'
import renderWebGL from '@/components/temple/render-webgl'
import ProgressCover from '@/components/temple/progress-cover'
import { cdnMediaUri, NFTData } from '@/lib/nfts'

type SpaceData = Space & {
  mediaSlots: MediaSlot[]
}

const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
  const isSSR = () => Boolean(userAgent.match(/SSR/i))
  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
  const isDesktop = () => Boolean(!isMobile() && !isSSR())
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  }
}

async function fillSlots(space: SpaceData) {
  const unityInstance = (window as any).unityInstance
  if (!unityInstance) {
    console.log('unityInstance not ready, retry in 1s')
    setTimeout(() => fillSlots(space), 1000)
    return
  }
  // unityInstance.SendMessage('Sun', 'SetTime', '{"hour":0,"minutes":0,"seconds":0}')
  for (const mediaSlot of space.mediaSlots) {
    const payload = {
      slotKey: mediaSlot.slotKey,
      imageURL: cdnMediaUri(mediaSlot.mediaUri),
    }
    unityInstance.SendMessage('NFT_Manager', 'SetImage', JSON.stringify(payload))
  }
}

const Space: NextPage<{slug: string}> = ({ slug }) => {
  const [mobileDetect, setMobileDetect] = useState(getMobileDetect('SSR'))
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [space, setSpace] = useState<SpaceData|null>(null)

  useEffect(() => {
    if (typeof window.navigator !== 'undefined') {
      const mobileDetect = getMobileDetect(window.navigator.userAgent)
      setMobileDetect(mobileDetect)
    }
  }, [])

  useEffect(() => {
    axios.get(`/api/spaces/${slug}`).then((res) => {
      setSpace(res.data)
    })
  }, [slug])

  useEffect(() => {
    if (!space || !mobileDetect.isDesktop()) {
      return
    } else {
      let updateProgress = (progress: number) => setLoadingProgress(Math.floor(progress * 100))
      let config = null
      try {
        config = JSON.parse(space.config as string)
      } catch(err) {}
      renderWebGL(updateProgress, null, config)
      return () => {
        updateProgress = () => {}
      }
    }
  }, [space, mobileDetect])

  useEffect(() => {
    if (loadingProgress >= 100) {
      fillSlots(space!)
    }
  }, [space, loadingProgress])

  // if (!slug) {
  //   return <div />
  // } else if (slug !== 'bmrlab') {
  //   return <Error statusCode={404} />
  // } else
  if (!mobileDetect.isDesktop()) {
    return <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white'>
      <div
        className='w-12 h-12 my-4'
        style={{
          'background': 'url("/static/logo-white.png") no-repeat center',
          'backgroundSize': 'contain',
        }}
      ></div>
      <div className='text-grandslang text-3xl my-2'>Temple OF Muse</div>
      <div className='px-4 my-2 text-center'>Not available in mobile yet, please open in desktop.</div>
      <a
        className='py-3 px-16 my-6 bg-white text-black rounded-full flex flex-row items-center'
        href='https://bmr.art'
      >
        <span className='mr-2'>Back to BMR</span>
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4812 2.35418L3.27839 2.35418V0L14.5 0V11.2216H12.1458V4.01884L2.16466 14L0.5 12.3353L10.4812 2.35418Z" fill="black"/>
        </svg>
      </a>
    </div>
  }

  return (
    <div className='relative min-h-screen'>
      <canvas id='unity-canvas'></canvas>
      <ProgressCover loadingProgress={loadingProgress} />
    </div>
  )
}

Space.getInitialProps = async function({ query }): Promise<{slug:string}> {
  const slug = (query.slug ?? '').toString()
  return {
    slug
  }
}

export default Space
