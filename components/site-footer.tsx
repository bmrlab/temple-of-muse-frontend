import clsx from 'clsx'
import styles from './site-footer.module.css'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={clsx(
        styles.wrapper,
        // 'bg-red-700',
        'h-16',
        'flex flex-row',
        'justify-between items-center',
        'text-center',
      )}>
        <div className='px-12'>Twitter</div>
        <div className={styles.divider}></div>
        <div className='px-12'>Discord</div>
        <div className={styles.divider}></div>
        <div className='flex-1 text-4xl text-grandslang'>Made with gas by BMR-LAB</div>
      </div>
      <div className='p-4 text-center text-sm text-white/50'>©2022 BMR-LAB</div>
    </footer>
  )
}
