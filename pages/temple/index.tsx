import clsx from 'clsx'
import type { NextLayoutPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import renderWebGL from '@/components/temple/render-webgl'
import ProgressCover from '@/components/temple/progress-cover'
import NFTsDrawer from '@/components/temple/nfts-drawer'


const Temple: NextLayoutPage = () => {
  let [loadingProgress, setProgress] = useState(0)

  useEffect(() => {
    let updateProgress = (progress: number) => setProgress(Math.floor(progress * 100))
    renderWebGL(updateProgress)
    return () => {
      updateProgress = () => {}
    }
  }, [])

  return (
    <div className='relative'>
      <canvas id='unity-canvas'></canvas>
      <ProgressCover progress={loadingProgress} />
      <NFTsDrawer />
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
