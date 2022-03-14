import { useState } from 'react'
import clsx from 'clsx'
import styles from './mindmap.module.css'

import imageCloud from '../../assets/images/cloud.png'

export default function Mindmap() {
  const mindmaps = [{
    index: 'I', title: 'Vision & Value'
  }, {
    index: 'II', title: 'Community'
  }, {
    index: 'III', title: 'Temple NFT Minting'
  }, {
    index: 'IV', title: 'Release'
  }, {
    index: 'V', title: 'Temple NFT Minting'
  }, {
    index: 'VI', title: 'Connect Your Mind'
  }]
  return (
    <div className={clsx('min-h-screen', 'relative', 'px-6')}>
      <div className={clsx(
        'bg-center bg-no-repeat bg-contain',
        'w-96 h-48',
        'absolute z-0 top-20 left-1/4'
      )} style={{
        'backgroundImage': `url(${imageCloud.src})`
      }}></div>

      <h2 className={clsx(
        'container mx-auto mt-16 sm:mt-32 mb-6 sm:mb-0',
        'text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'
      )}>Mindmap</h2>
      <div className={clsx(
        'container mx-auto',
        'border-solid border-b border-r border-white',
      )}>
        <div className='float-left hidden sm:block w-1/2 pt-[25%]'></div>
        {mindmaps.map(({index, title}, i) => (
          <div key={i} className={clsx(
            'float-left w-1/2 pt-[50%] sm:w-1/4 sm:pt-[25%]',
            'border-solid border-t border-l border-white',
            'relative cursor-pointer',
          )}>
            <div className='font-serif absolute left-0 top-0 p-3 sm:text-2xl'>{index}</div>
            <div className='absolute left-0 top-1/3 p-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{title}</div>
          </div>
        ))}
        <div className='clear-both'></div>
      </div>
    </div>
  )
}
