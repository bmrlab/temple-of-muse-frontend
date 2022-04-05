import type { NextLayoutPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import renderWebGL from '@/components/temple/render-webgl'


const Temple: NextLayoutPage = () => {
  useEffect(() => {
    renderWebGL()
  }, [])

  return (
    <div>
      {/*<Head>
        <title>Temple of Muse</title>
      </Head>*/}
      <canvas id='unity-canvas'></canvas>
      <div id='unity-loading-bar'>
        <div id='unity-progress-bar-empty'>
          <div id='unity-progress-bar-full'></div>
        </div>
      </div>
    </div>
  )
}


Temple.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Temple
