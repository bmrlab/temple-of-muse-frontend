import clsx from 'clsx'
import Link from 'next/link'
import { useState, useEffect, useMemo, useRef, RefObject } from 'react'

import imageArch from '../../assets/images/arch.png'
import imageCloud from '../../assets/images/cloud.png'
import imageStatue from '../../assets/images/muse-statue.png'

function initCloudMove(cloudEl: RefObject<HTMLDivElement>, request: { id: number }) {
  const move = () => {
    request.id = window.requestAnimationFrame(move)
    if (cloudEl && cloudEl.current) {
      const newX = Math.floor(window.scrollY * 100 / window.innerHeight) + 5
      cloudEl.current.style.right = `${Math.min(newX, 100)}%`
    }
  }
  move()
}

export default function Hero() {
  // let [offsetX, setOffsetX] = useState(5)
  const cloudEl = useRef<HTMLDivElement>(null)
  const request = useMemo(() => ({id: 0}), [])
  useEffect(() => {
    initCloudMove(cloudEl, request)
    // window.addEventListener('scroll', () => {
    //   const newX = Math.floor(window.scrollY * 100 / window.innerHeight) + 5
    //   setOffsetX(Math.min(newX, 100))
    // })
    return () => {
      request.id && window.cancelAnimationFrame(request.id)
    }
  }, [cloudEl, request])

  return (
    <div className={clsx('relative', 'pb-10' /*, 'min-h-screen'*/)}>
      <div ref={cloudEl} className={clsx(
        'bg-center bg-no-repeat bg-contain',
        'w-96 h-48',
        'fixed z-0 top-8'
      )} style={{
        // 'right':`${offsetX}%`,
         'right': '5%',
        'backgroundImage': `url(${imageCloud.src})`
      }}></div>

      <div className={clsx(
        'bg-center bg-no-repeat bg-contain',
        'w-64 h-64 sm:w-96 sm:h-96 mx-auto mt-12 mb-12',
        'relative',
      )} style={{
        'backgroundImage': `url(${imageArch.src})`
      }}>
        <div className={clsx(
          'bg-center bg-no-repeat bg-contain',
          'absolute left-0 top-0 w-full h-full',
        )} style={{
          'backgroundImage': `url(${imageStatue.src})`
        }}></div>
      </div>

      <h1 className={clsx(
        'font-serif',
        'text-5xl sm:text-6xl md:text-8xl font-bold tracking-wide text-center my-4'
      )}>Unique 3D Space</h1>
      <h2 className={clsx(
        'font-serif',
        'text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-center my-4'
      )}>Show your collection to the world</h2>

      {/* eslint-disable */}
      <a href='/temple' className={clsx(
        'block w-48 mx-auto my-12 text-center',
        'border py-2 text-sm bg-white hover:bg-white/90 text-black',
      )}>TRY DEMO</a>
      {/* eslint-enable */}
    </div>
  )
}
