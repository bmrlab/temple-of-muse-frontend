import { useRef, useState, RefObject } from 'react'
import clsx from 'clsx'
import styles from './hero.module.css'

import imageArch from '../../assets/images/arch.png'
import imageCloud from '../../assets/images/cloud.png'
import imageStatue from '../../assets/images/muse-statue.png'

function initCloudMove(cloudEl: RefObject<HTMLDivElement>) {
  if (typeof window !== 'undefined') {
    const move = () => {
      window.requestAnimationFrame(move)
      if (cloudEl && cloudEl.current) {
        const newX = Math.floor(window.scrollY * 100 / window.innerHeight) + 5
        cloudEl.current.style.right = `${Math.min(newX, 100)}%`
      }
    }
    move()
  }
}

type Props = {
  tryDemo: Function
}

export default function Hero({ tryDemo } : Props) {
  // let [offsetX, setOffsetX] = useState(5)
  const cloudEl = useRef<HTMLDivElement>(null)

  if (typeof window !== 'undefined') {
    initCloudMove(cloudEl)
    // window.addEventListener('scroll', () => {
    //   const newX = Math.floor(window.scrollY * 100 / window.innerHeight) + 5
    //   setOffsetX(Math.min(newX, 100))
    // })
  }

  return (
    <div className={clsx('min-h-screen', 'relative')}>
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

      <button className={clsx(
        'block w-48 mx-auto my-12',
        'border py-2 text-sm bg-white hover:bg-white/90 text-black',
      )} onClick={tryDemo}>TRY DEMO</button>
    </div>
  )
}
