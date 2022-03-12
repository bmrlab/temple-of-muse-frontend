import { useState } from 'react'
import clsx from 'clsx'
import styles from './mindmap.module.css'

export default function Mindmap() {
  return (
    <div className={clsx('min-h-screen', 'relative')}>
      <h1 className='text-8xl text-center my-24'>Mindmap</h1>
    </div>
  )
}
