import clsx from 'clsx'
import Image from 'next/image'
import styles from './site-footer.module.css'

import twitterCircle from '../../assets/images/twitter-circle.png'
import discordCircle from '../../assets/images/discord-circle.png'

export default function SiteFooter() {
  return (
    <footer>
      <div className={clsx(
        // 'bg-red-700',
        'flex flex-row flex-wrap sm:flex-nowrap',
        'justify-between items-center',
        'text-center',
        'border-solid border-t border-white',
      )}>
        <a className={clsx(
          'flex-1 sm:flex-none sm:w-36',
          'flex items-center justify-center',
          'block h-16 border-solid border-b border-white',
        )} href='https://twitter.com/bmr_lab' target='_blank' rel='noreferrer'>
          <div className='w-8 h-8 mr-2 relative'>
            <Image src={twitterCircle.src} alt='' layout='fill' objectFit='contain'></Image>
          </div>
          <span className='text-lg'>Twitter</span>
        </a>
        <a className={clsx(
          'flex-1 sm:flex-none sm:w-36',
          'flex items-center justify-center',
          'block h-16 border-solid border-b border-l border-white',
        )} href='https://discord.gg/DAVgV43YVe' target='_blank' rel='noreferrer'>
          <div className='w-8 h-8 mr-2 relative'>
            <Image src={discordCircle.src} alt='' layout='fill' objectFit='contain'></Image>
          </div>
          <span className='text-lg'>Discord</span>
        </a>
        <div className={clsx(
          'flex-none w-full sm:flex-1 sm:w-auto',
          'flex items-center justify-center',
          'h-16 border-solid border-b sm:border-l border-white',
          'text-2xl md:text-3xl lg:text-4xl text-grandslang',
        )}>Made with gas by BMR-LAB</div>
      </div>
      <div className='p-4 text-center text-sm text-white/50'>©2022 BMR-LAB</div>
    </footer>
  )
}
