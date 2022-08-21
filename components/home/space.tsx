import clsx from 'clsx'
import { useRef, useState, RefObject } from 'react'

import imageArch from '../../assets/images/space-demo-cover.jpg'

export default function Space() {
  return (
    <div
      className={clsx(
        'bg-no-repeat bg-center bg-cover relative',
        'h-screen lg:h-auto lg:pt-[48%]'
      )}
      style={{'backgroundImage': `url(${imageArch.src})`}}
    >
      <div
        className={clsx(
          'absolute opacity-50 font-["helvetica"] text-xs',
          'left-0 right-0 bottom-4 text-center',
          'lg:left-3 lg:bottom-2 lg:right-auto lg:text-left',
          'xl:left-6 xl:bottom-4',
        )}
      >DESIGNED BY:<br/>HAN TAO, HE ZIMING</div>
    </div>
  )
}
