import type {
  // NextPage,
  NextLayoutPage
} from 'next'
import clsx from 'clsx'
import Layout from '@/components/layout'
import Hero from '@/components/home/hero'
import Space from '@/components/home/space'
import ScrollText from '@/components/home/scroll-text'
import Mindmap from '@/components/home/mindmap'
import SiteDeco from '@/components/home/site-deco'
import CursorDot from '@/components/home/cursor-dot'
import styles from './index.module.css'

const Home: NextLayoutPage = () => {
  return (
    <>
      <Hero />
      <Space />
      <ScrollText />
      <Mindmap />
      <SiteDeco />
      {/*<CursorDot />*/}
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
