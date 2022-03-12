import type {
  NextComponentType,
  NextPageContext,
  NextPage,
  NextLayoutComponentType,
} from 'next'
import type { AppProps } from 'next/app'

declare module 'next' {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode
  }
  type NextLayoutPage<P = {}> = NextPage<P> & NextLayoutComponentType<P>
}

declare module 'next/app' {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType
  }
}
