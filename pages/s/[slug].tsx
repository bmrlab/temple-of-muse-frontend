import clsx from 'clsx'
import { useMemo, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Error from 'next/error'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { cdnMediaUri, NFTData } from '@/lib/nfts'
import { getMobileDetect } from '@/lib/utils'
import renderWebGL from '@/components/temple/render-webgl'
import ProgressCover from '@/components/temple/progress-cover'
import { Space, MediaSlot } from '@prisma/client'
import prisma from '@/lib/prisma'

type MediaSlotData = Pick<MediaSlot, 'id' | 'slotKey' | 'mediaUri' | 'contractAddress' | 'tokenId' | 'name' | 'description'>
type SpaceData = Pick<Space, 'id' | 'ownerAddress' | 'slug' | 'title' | 'description' | 'config'> & {
  mediaSlots: MediaSlotData[]
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

const Page: NextPage<{
  space: SpaceData,
  slug: string,
  ignoreMobile: boolean,
}> = ({ space, slug, ignoreMobile }) => {
  const [mobileDetect, setMobileDetect] = useState(getMobileDetect('SSR'))
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [activeSlotKey, setActiveSlotKey] = useState('')

  const activeMediaSlot = useMemo<MediaSlotData|null>(() => {
    if (!activeSlotKey) {
      return null
    }
    const mediaSlot = space.mediaSlots.find((item) => item.slotKey === activeSlotKey)
    return mediaSlot || null
  }, [space, activeSlotKey])

  useEffect(() => {
    if (typeof window.navigator !== 'undefined') {
      const mobileDetect = getMobileDetect(window.navigator.userAgent)
      setMobileDetect(mobileDetect)
    }
  }, [])

  useEffect(() => {
    if (mobileDetect.isSSR() || (mobileDetect.isMobile() && !ignoreMobile)) {
      return
    }
    let updateProgress = (progress: number) => setLoadingProgress(Math.floor(progress * 100))
    let config = null
    try {
      config = JSON.parse(space.config as string)
    } catch(err) {}
    if (!(window as any).unityInstance) {
      renderWebGL(updateProgress, null, config)
    }
    const listener = (e: any) => {
      setActiveSlotKey(e.detail)
    }
    document.addEventListener('selectSlot', listener)
    return () => {
      updateProgress = () => {}
      document.removeEventListener('selectSlot', listener)
    }
  }, [space, mobileDetect, ignoreMobile])

  useEffect(() => {
    if (loadingProgress >= 100) {
      fillSlots(space!)
    }
  }, [space, loadingProgress])

  const MediaDetailDrawer = ({ activeMediaSlot }: { activeMediaSlot: MediaSlotData }) => {
    return (
      <div className='fixed left-0 top-0 w-full h-full p-4 flex items-center justify-center'>
        <div className='md:h-3/4 text-white relative'>
          {/* black bg with rounded corner */}
          <div
            className='absolute top-0 left-0 w-full h-full bg-black rounded-3xl'
            style={{'backdropFilter': 'blur(40px)', 'background': 'rgba(7, 7, 7, 0.3)'}}
          ></div>
          {/* eslint-disable */}
          <div className='relative h-full py-16 md:py-12 flex items-center justify-center'>
            {/\.mp4$/.test(activeMediaSlot.mediaUri) && <video
              src={activeMediaSlot.mediaUri} autoPlay muted
              className='max-h-full hidden md:block -translate-x-16'
            ></video>}
            {!/\.mp4$/.test(activeMediaSlot.mediaUri) && <img
              src={activeMediaSlot.mediaUri} alt={activeMediaSlot.name ?? ''}
              className='max-h-full max-w-[600px] hidden md:block -translate-x-16'
            ></img>}
            <div className='max-h-full overflow-y-auto w-full pl-8 pr-8 md:w-72 md:pl-0 md:pr-16 lg:w-96'>
              <div className='text-2xl font-extralight mb-8'>{ activeMediaSlot.name }</div>
              <div
                className='text-sm font-light leading-loose'
                dangerouslySetInnerHTML={{ __html: activeMediaSlot.description ?? '' }}
              ></div>
            </div>
          </div>
          <div
            className='absolute right-6 top-6 w-[31px] h-[31px] cursor-pointer rounded-full border border-white/50 rotate-45'
            onClick={() => setActiveSlotKey('')}
          >
            <div className='absolute left-2 right-2 h-[1px] top-[14px] bg-white'></div>
            <div className='absolute top-2 bottom-2 w-[1px] left-[14px] bg-white'></div>
          </div>
        </div>
      </div>
    )
  }

  if (mobileDetect.isSSR()) {
    return <div></div>
  } else if (mobileDetect.isMobile() && !ignoreMobile) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white'>
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
    )
  } else {
    return (
      <div className='relative min-h-screen'>
        <Head>
          <title>{space.title}</title>
          <meta name='description' content={space.description ?? ''} />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <canvas id='unity-canvas'></canvas>
        <ProgressCover loadingProgress={loadingProgress} />
        {activeMediaSlot && <MediaDetailDrawer activeMediaSlot={activeMediaSlot} />}
      </div>
    )
  }

}

export async function getServerSideProps({ query }: {
  query: { slug: string, m: string }
}) {
  const slug = (query.slug ?? '').toString()
  const m = (query.m ?? '').toString()
  // axios.get(`/api/spaces/${slug}`)
  const space: SpaceData|null = await prisma.space.findUnique({
    where: { slug },
    select: {
      id: true,
      ownerAddress: true,
      slug: true,
      title: true,
      description: true,
      config: true,
      mediaSlots: {
        select: {
          id: true,
          slotKey: true,
          mediaUri: true,
          contractAddress: true,
          tokenId: true,
          name: true,
          description: true,
        }
      }
    }
  })
  if (!space) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      space,
      slug,
      ignoreMobile: m === '1',
    }
  }
}

export default Page
