import { useState } from 'react'
import clsx from 'clsx'
import styles from './hero.module.css'

import imageArch from '../../assets/images/arch.png'
import imageCloud from '../../assets/images/cloud.png'

export default function Hero() {
  let [offsetX, setOffsetX] = useState(5)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const newX = Math.floor(window.scrollY * 100 / window.innerHeight) + 5
      setOffsetX(Math.min(newX, 100))
    })
  }

  return (
    <div className={clsx('min-h-screen', 'relative')}>
      <div className={clsx(
        'bg-center bg-no-repeat bg-contain',
        'w-96 h-48',
        'fixed z-0 top-8'
      )} style={{
        'right':`${offsetX}%`,
        'backgroundImage': `url(${imageCloud.src})`
      }}></div>

      <div className={clsx(
        'bg-center bg-no-repeat bg-contain',
        'w-64 h-64 sm:w-96 sm:h-96 mx-auto mt-12 mb-12',
        'relative',
      )} style={{
        'backgroundImage': `url(${imageArch.src})`
      }}></div>

      <h1 className={clsx(
        styles.textHeading,
        'text-5xl sm:text-6xl md:text-8xl font-bold tracking-wide text-center my-4'
      )}>3D GALLERY</h1>
      <h2 className={clsx(
        styles.textHeading,
        'text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-center my-4'
      )}>To Show Your NFTs</h2>

      <button className={clsx(
        'block w-48 mx-auto my-12',
        'border py-2 text-sm bg-white hover:bg-white/90 text-black',
      )}>TRY DEMO</button>
    </div>
  )
}
