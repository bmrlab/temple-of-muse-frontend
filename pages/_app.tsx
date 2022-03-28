import '../styles/globals.css'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
// import type { AppProps } from 'next/app'
import type { NextComponentType } from 'next'
import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  return (
    <RecoilRoot>
      {getLayout(<Component {...pageProps} />)}
    </RecoilRoot>
  )
}

export default MyApp
