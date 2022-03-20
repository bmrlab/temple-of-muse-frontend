import { useRef, useState, RefObject } from 'react'
import clsx from 'clsx'
import styles from './space.module.css'

type Props = {
  showSpace: Boolean,
  setShowSpace: Function
}

export default function Space({ showSpace, setShowSpace }: Props) {
  const rootEl = useRef<HTMLDivElement>(null)
  if (showSpace) {
    if (rootEl && rootEl.current) {
      window.scrollTo(0, rootEl.current.offsetTop)
    }
  }
  return (
    <div ref={rootEl} className={clsx(
       { [styles.demoCover]: !showSpace },
      'h-screen', 'relative'
    )}>
      {showSpace ? (
        <>
          <iframe
            src='https://bmrlab.github.io/temple-of-muse-space/'
            className={clsx(
              'relative block w-full h-full',
              'border-none',
            )}
          ></iframe>
          <button className={clsx(
            'absolute bottom-10 left-1/2 block w-48 -ml-24 py-2 text-sm',
            'border border-solid border-white bg-transparent hover:border-white/90 text-white',
          )} onClick={() => setShowSpace(false)}>EXIT DEMO</button>
        </>
      ) : (
        <div className='absolute left-0 top-0 w-full h-full border-none'></div>
      )}
    </div>
  )
}
