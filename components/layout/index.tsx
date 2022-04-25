import React, { ReactNode } from 'react'
import Head from 'next/head'
import clsx from 'clsx'

import SiteHeader from './site-header'
import SiteFooter from './site-footer'

type Props = {
  footer?: boolean,
  children?: ReactNode
}

/**
 * see https://github.com/vercel/next.js/blob/canary/examples/blog/pages/_document.js
 * to override default html template
 */

export default function Layout({ footer=true, children }: Props) {
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
      {footer && <SiteFooter />}
    </div>
  )
}
