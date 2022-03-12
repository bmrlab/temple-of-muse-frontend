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
      <div className={clsx(
        styles.arch,
        'w-96 h-96 mx-auto mt-12 mb-24',
        'relative',
      )}></div>
      <div className={clsx(
        styles.cloud,
        'w-96 h-48',
        'fixed top-8',
      )} style={{
        'right': `${offsetX}%`
      }}></div>
    </div>
  )
}
