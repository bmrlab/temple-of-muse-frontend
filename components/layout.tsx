import React, { ReactNode } from 'react'
import Head from 'next/head'
import clsx from 'clsx'

import SiteHeader from '../components/layouts/site-header'
import SiteFooter from '../components/layouts/site-footer'
import SiteDeco from '../components/layouts/site-deco'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={clsx(
      'overflow-hidden',
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
      <SiteDeco />
    </div>
  )
}
