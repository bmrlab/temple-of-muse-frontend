import { useState } from 'react'
import clsx from 'clsx'
import styles from './space.module.css'

export default function Space() {
  return (
    <div className={clsx(styles.demoCover, 'h-screen', 'relative')}></div>
  )
}
