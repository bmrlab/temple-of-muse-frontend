import type {
  // NextPage,
  NextLayoutPage
} from 'next'
import Layout from '../components/layout'

const Home: NextLayoutPage = () => {
  return (
    <div></div>
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
