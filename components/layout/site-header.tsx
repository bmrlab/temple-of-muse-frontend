import clsx from 'clsx'
import Link from 'next/link'
import styles from './site-header.module.css'
import ConnectButton from '@/components/connect-button'

export default function SiteHeader() {
  return (
    <header className={clsx(
      styles.header,
      // 'bg-red-700',
      'relative z-10',
      'flex flex-row',
      'justify-between items-center',
      'h-16 sm:h-20 px-4'
    )}>
      <Link href='/'>
        <a className='w-[200px] flex flex-row justify-start items-end'>
          <div className={clsx('w-6 h-6 sm:w-8 sm:h-8 mb-2 mr-1', styles.logo)}>{/*logo*/}</div>
          <span className='text-grandslang text-base sm:text-lg'>Temple OF Muse</span>
        </a>
      </Link>
      <div className='hidden sm:block items-center'>
        <Link href='/'>
          <a className='p-2 mx-1'>Home</a>
        </Link>
        {/* eslint-disable */}
        <a href='/temple' className='p-2 mx-1'>Temple</a>
        <Link href='/assets'>
          <a className='p-2 mx-1'>Assets</a>
        </Link>
      </div>
      <div className='w-[200px] text-right'>
        <ConnectButton />
      </div>
    </header>
  )
}
