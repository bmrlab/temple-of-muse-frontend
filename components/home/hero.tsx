import { useState } from 'react'
import clsx from 'clsx'
import styles from './hero.module.css'

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
      <div className={clsx(styles.arch, 'w-96 h-96 mx-auto mt-12 mb-12', 'relative')}></div>
      <div className={clsx(styles.cloud, 'w-96 h-48', 'fixed top-8')} style={{'right':`${offsetX}%`}}></div>
      <h1 className={clsx(styles.textHeading, 'text-8xl text-center my-4')}>3D GALLERY</h1>
      <h2 className={clsx(styles.textHeading, 'text-5xl text-center my-4')}>To Show Your NFTs</h2>
      <button className={clsx(
        'block w-48 mx-auto my-12',
        'border py-2 text-sm bg-white hover:bg-white/90 text-black',
      )}>TRY DEMO</button>
    </div>
  )
}
