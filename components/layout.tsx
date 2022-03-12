import React, { ReactNode } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import styles from './layout.module.css'

import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={clsx(
      // styles.layout,
      'min-h-screen',
      'text-white bg-black',
      'flex flex-col',
    )}>
      <Head>
        <title>Temple of Muse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main className='flex-1'>{children}</main>

      <SiteFooter />

      <div className={styles.leftFloat}>
        <span className={styles.vText}>SCROLL</span>
        <svg width="25" height="63" viewBox="18 0 25 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.692 -6.87442e-05V60.9694" stroke="white"/>
          <path d="M35.6426 56.435L30.6928 61.3843L25.7433 56.4348" stroke="white"/>
        </svg>
      </div>

      <div className={styles.rightFloat}>
        <span className={styles.vText}>BMR-LAB 2022</span>
      </div>

    </div>
  )
}
