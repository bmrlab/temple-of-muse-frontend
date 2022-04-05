import clsx from 'clsx'
import { useRef, useState, RefObject } from 'react'

import imageArch from '../../assets/images/space-demo-cover.jpg'

export default function Space() {
  return (
    <div
      className='h-screen bg-no-repeat bg-center bg-cover'
      style={{'backgroundImage': `url(${imageArch.src})`}}
    ></div>
  )
}
