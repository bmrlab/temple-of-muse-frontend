import clsx from 'clsx'
import styles from './site-deco.module.css'

export default function SiteDeco() {
  return (
    <>
      <div className={clsx(
        'fixed z-10 top-1/3 w-8',
        'scale-75 sm:scale-100 left-0 sm:left-4',
        'flex flex-col items-center justify-center'
      )}>
        <span className={styles.vText}>SCROLL</span>
        <svg className='mt-2' width="25" height="63" viewBox="18 0 25 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.692 -6.87442e-05V60.9694" stroke="white"/>
          <path d="M35.6426 56.435L30.6928 61.3843L25.7433 56.4348" stroke="white"/>
        </svg>
      </div>

      <div className={clsx(
        'fixed z-10 top-1/3 w-8',
        'scale-75 sm:scale-100 right-0 sm:right-4',
        'flex flex-col items-center justify-center'
      )}>
        <span className={styles.vText}>BMR-LAB 2022</span>
      </div>
    </>
  )
}
