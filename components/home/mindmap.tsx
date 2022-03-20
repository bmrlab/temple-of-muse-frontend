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
  index: 'IV', title: 'Merge to Release'
}, {
  index: 'V', title: 'Bridge in Metaverse'
}, {
  index: 'VI', title: 'Connect Your Mind'
}]

const getMindmapDetail = (detailIndex: number) => {
  if (detailIndex == 1) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Vision & Value</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Early March 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>展示我们的愿景和能力，并为社区做一些预热</p>
        <ul className='list-disc pl-4'>
          <li>官网上线，展示我们的能力</li>
          <li>定期持续产出大师或者艺术家的原创空间，并在官网和社交网络上展示，作为项目的 1/1 Art</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 2) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Community</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>April 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>上线一个产品的 MVP，给一部分用户试用；发布招募贴，吸引人进来共创</p>
        <ul className='list-disc pl-4'>
          <li>在一个固定的场景里，可以陈列自己的 NFT</li>
          <li>MiniDAM 的素材可以 mint 成 NFT</li>
          <li>全职 Mod：管理团队，包括创始团队成员</li>
          <li>Grants：创意和想法贡献者，产品试用者，代码贡献者</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 3) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Temple NFT Minting</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Mid June 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>利用一种空间生成的算法，生成 9999 个独一无二的空间：Temple NFT</p>
        <ul className='list-disc pl-4'>
          <li>60% community sale:  给社区的早期关注者</li>
          <li>35% public sale: 将公开销售</li>
          <li>5% team: 团队保留一部分，并赠送给艺术家/收藏者朋友们</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 4) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Release</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>July 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>全面正式上线 Temple of Muse 产品，每一个 Temple NFT 是一个独一无二的空间</p>
        <ul className='list-disc pl-4'>
          <li>Temple 的 owner 可以在自己的空间里展示自己的其他 NFT 藏品</li>
          <li>任何人可以在里面游览</li>
          <li>这个空间甚至可以嵌入到 muse transfer 的自定义背景里面</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 5) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>BRIDGE in Metaverse</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>End of 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>基于 Social graph 构建 metaverse 的桥梁。</p>
        <ul className='list-disc pl-4'>
          <li>比如 Lens Protocol https://lens.dev</li>
          <li>让每个人的 Temple 可以相互连接</li>
        </ul>
      </div>
    </>
  } else if (detailIndex == 6) {
    return <>
      <h3 className='text-4xl sm:text-6xl font-light'>Connect Your Mind</h3>
      <p className='text-white/50 italic font-serif mt-3 mb-6'>Early March 2022</p>
      <div className='sm:text-lg'>
        <p className='my-4'>We are looking forward your great ideas.</p>
        <textarea
          className='bg-transparent border-solid border border-white w-full h-40 outline-0 p-6'
          placeholder='Start Typing ...'
        ></textarea>
        <button className={clsx(
          'block w-48 my-6 py-2 text-sm',
          'border border-solid border-white hover:border-white/90 bg-transparent',
        )}>SUBMIT IDEA</button>
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
