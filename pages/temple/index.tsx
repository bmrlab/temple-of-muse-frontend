import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'


function renderWebGL() {
  var canvas = document.querySelector('#unity-canvas')
  var loadingBar = document.querySelector('#unity-loading-bar')
  var progressBarFull = document.querySelector('#unity-progress-bar-full')

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

  canvas.style.width = window.innerWidth + 'px'
  canvas.style.height = window.innerHeight + 'px'
  loadingBar.style.display = 'block'

  var script = document.createElement('script')
  script.src = loaderUrl
  script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
      progressBarFull.style.width = 100 * progress + '%'
    }).then((unityInstance) => {
      window.unityInstance = unityInstance
      loadingBar.style.display = 'none'
    }).catch((message) => {
      alert(message)
    })
  }
  document.body.appendChild(script)
}


const Temple: NextPage = () => {

  useEffect(() => {
    renderWebGL()
  }, [])

  return (
    <div>
      <Head>
        <title>Temple of Muse</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <canvas id='unity-canvas' width='960' height='600'></canvas>
      <div id='unity-loading-bar'>
        <div id='unity-progress-bar-empty'>
          <div id='unity-progress-bar-full'></div>
        </div>
      </div>
    </div>
  )

}

export default Temple
