import { useState } from 'react'
import clsx from 'clsx'
import styles from './space.module.css'

export default function Space() {
  return (
    <div className={clsx(
      // styles.demoCover,
      'h-screen', 'relative'
    )}>
      <iframe
        src='https://bmrlab.github.io/temple-of-muse-space/'
        className={clsx(
          'relative block w-full h-full',
          'border-none',
        )}
      ></iframe>
      <div className={clsx(
        'absolute left-0 top-0 w-full h-full',
        'border-none',
      )}></div>
    </div>
  )
}
