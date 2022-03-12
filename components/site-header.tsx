import clsx from 'clsx'
import styles from './site-header.module.css'

export default function SiteHeader() {
  return (
    <header className={clsx(
      styles.header,
      // 'bg-red-700',
      'flex flex-row',
      'justify-between items-center',
      'h-20 px-4'
    )}>
      <span>Temple Of Muse</span>
      <button className={clsx(
        'border border-white hover:border-white/75 hover:text-white/75',
        'rounded-full px-4 py-1',
      )}>Connect Wallet</button>
    </header>
  )
}
