import clsx from 'clsx'
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
      <div className='flex flex-row justify-start items-end'>
        <div className={clsx('w-6 h-6 sm:w-8 sm:h-8 mb-2 mr-1', styles.logo)}>{/*logo*/}</div>
        <span className='text-grandslang text-base sm:text-lg'>Temple OF Muse</span>
      </div>
      <div className='flex-1'>
        {/* placeholder */}
      </div>
      <ConnectButton />
    </header>
  )
}
