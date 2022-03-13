import clsx from 'clsx'
import styles from './site-footer.module.css'

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
        <div className={clsx(
          'flex-1 sm:flex-none sm:w-36',
          'flex items-center justify-center',
          'h-16 border-solid border-b border-white',
        )}>Twitter</div>
        <div className={clsx(
          'flex-1 sm:flex-none sm:w-36',
          'flex items-center justify-center',
          'h-16 border-solid border-b border-l border-white',
        )}>Discord</div>
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
