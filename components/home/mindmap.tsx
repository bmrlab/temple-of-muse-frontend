import { useState } from 'react'
import clsx from 'clsx'
import styles from './mindmap.module.css'

import imageCloud from '../../assets/images/cloud.png'

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

const getMindmapDetail = (detailIndex: number) => {
  if (detailIndex == 1) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Vision & Value</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Early March 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>This phase is to demonstrate our vision and capabilities and to do some warm-up for the hot zone</p>
        <ul className='list-disc pl-4'>
          <li>Official website online, recruiting</li>
          <li>Regularly and continuously produce original spaces by masters or artists, and display them on the official website and social networks as 1/1 Art of the project</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 2) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Community</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Early March 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>This phase is to demonstrate our vision and capabilities and to do some warm-up for the hot zone</p>
        <ul className='list-disc pl-4'>
          <li>Official website online, recruiting</li>
          <li>Regularly and continuously produce original spaces by masters or artists, and display them on the official website and social networks as 1/1 Art of the project</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 3) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Temple NFT Minting</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Early March 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>This phase is to demonstrate our vision and capabilities and to do some warm-up for the hot zone</p>
        <ul className='list-disc pl-4'>
          <li>Official website online, recruiting</li>
          <li>Regularly and continuously produce original spaces by masters or artists, and display them on the official website and social networks as 1/1 Art of the project</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 4) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Release</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Early March 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>This phase is to demonstrate our vision and capabilities and to do some warm-up for the hot zone</p>
        <ul className='list-disc pl-4'>
          <li>Official website online, recruiting</li>
          <li>Regularly and continuously produce original spaces by masters or artists, and display them on the official website and social networks as 1/1 Art of the project</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 5) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Temple NFT Minting</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Early March 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>This phase is to demonstrate our vision and capabilities and to do some warm-up for the hot zone</p>
        <ul className='list-disc pl-4'>
          <li>Official website online, recruiting</li>
          <li>Regularly and continuously produce original spaces by masters or artists, and display them on the official website and social networks as 1/1 Art of the project</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 6) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Connect Your Mind</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Early March 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>This phase is to demonstrate our vision and capabilities and to do some warm-up for the hot zone</p>
        <ul className='list-disc pl-4'>
          <li>Official website online, recruiting</li>
          <li>Regularly and continuously produce original spaces by masters or artists, and display them on the official website and social networks as 1/1 Art of the project</li>
        </ul>
      </div>
    </>
  }
}

export default function Mindmap() {
  let [detailIndex, setDetailIndex] = useState(0)

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
        'container mx-auto mt-16 sm:mt-32 mb-12 sm:mb-6',
        'text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'
      )}>Mindmap</h2>
      <div className={clsx(
        'container mx-auto relative',
        'border-solid border-b border-r border-white',
      )}>
        <div className='float-left hidden sm:block w-1/2 pt-[25%]'></div>
        {mindmaps.map(({index, title}, i) => (
          <div key={i} className={clsx(
            'float-left w-1/2 pt-[50%] sm:w-1/4 sm:pt-[25%]',
            'border-solid border-t border-l border-white',
            'relative cursor-pointer',
          )} onClick={() => setDetailIndex(i + 1)}>
            <div className='font-serif absolute left-0 top-0 p-3 sm:text-2xl'>{index}</div>
            <div className='absolute left-0 top-1/3 p-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{title}</div>
          </div>
        ))}
        <div className='clear-both'></div>
        {/* mindmap details */}
        <div className={clsx(
          'absolute left-0 top-0 -right-1 -bottom-1 px-3 py-6 sm:px-8 sm:py-12',
          'border-solid border border-gray-500',
          'bg-black', detailIndex > 0 ? 'block' : 'hidden',
        )}>
          {getMindmapDetail(detailIndex)}
          <div className={clsx(
            'absolute right-0 top-0 w-16 h-16 flex items-center justify-center',
            'text-6xl font-thin cursor-pointer',
          )} onClick={() => setDetailIndex(0)}>{'\u00d7'}</div>
        </div>
      </div>
    </div>
  )
}
