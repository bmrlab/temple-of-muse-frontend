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
        <a className='flex flex-row justify-start items-end'>
          <div className={clsx('w-6 h-6 sm:w-8 sm:h-8 mb-2 mr-1', styles.logo)}>{/*logo*/}</div>
          <span className='text-grandslang text-base sm:text-lg'>Temple OF Muse</span>
        </a>
      </Link>
      <div className='flex-1 flex flex-row justify-center items-center'>
        <Link href='/'>
          <a className='p-2 mx-2'>Home</a>
        </Link>
        <Link href='/temple'>
          <a className='p-2 mx-2'>Temple</a>
        </Link>
        <Link href='/assets'>
          <a className='p-2 mx-2'>Assets</a>
        </Link>
      </div>
      <ConnectButton />
    </header>
  )
}
