import clsx from 'clsx'
import styles from './site-header.module.css'

export default function SiteHeader() {
  return (
    <header className={clsx(
      styles.header,
      // 'bg-red-700',
      'relative z-10',
      'flex flex-row',
      'justify-between items-center',
      'h-20 px-4'
    )}>
      <div className='flex flex-row justify-start items-end'>
        <div className={clsx('w-8 h-8 mr-1', styles.logo)}>{/*logo*/}</div>
        <span className='text-grandslang text-lg -mb-2'>Temple OF Muse</span>
      </div>
      <div className='flex-1'>
        {/* placeholder */}
      </div>
      <div className='hidden sm:block'>
        <button className={clsx(
          'border border-white hover:border-white/75 hover:text-white/75',
          'rounded-full px-4 py-1',
        )}>Connect Wallet</button>
      </div>
    </header>
  )
}
