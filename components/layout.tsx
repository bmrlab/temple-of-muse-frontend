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
    </div>
  )
}
