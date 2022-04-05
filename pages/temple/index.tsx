import type { NextLayoutPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'

function renderWebGL() {
  var canvas = document.querySelector('#unity-canvas')
  var loadingBar = document.querySelector('#unity-loading-bar')
  var progressBarFull = document.querySelector('#unity-progress-bar-full')

  ;(canvas as any).style.width = window.innerWidth + 'px'
  ;(canvas as any).style.height = (window.innerHeight - 200) + 'px'
  ;(loadingBar as any).style.display = 'block'

  var buildUrl = '/space/Build'
  var loaderUrl = buildUrl + '/temple_of_muse_build.loader.js'
  var config = {
    dataUrl: buildUrl + '/temple_of_muse_build.data.gz',
    frameworkUrl: buildUrl + '/temple_of_muse_build.framework.js.gz',
    codeUrl: buildUrl + '/temple_of_muse_build.wasm.gz',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'BMR LAB',
    productName: 'Temple Of Muse',
    productVersion: '0.1',
  }

  var script = document.createElement('script')
  script.src = loaderUrl
  script.onload = () => {
    (window as any).createUnityInstance(canvas, config, (progress: number) => {
      ;(progressBarFull as any).style.width = 100 * progress + '%'
    }).then((unityInstance: any) => {
      (window as any).unityInstance = unityInstance
      ;(loadingBar as any).style.display = 'none'
    }).catch((message: string) => {
      alert(message)
    })
  }
  document.body.appendChild(script)
}


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
