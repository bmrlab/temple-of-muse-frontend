export default function renderWebGL(progressCallback) {
  var canvas = document.querySelector('#unity-canvas')

  canvas.style.width = window.innerWidth + 'px'
  canvas.style.height = (window.innerHeight - 200) + 'px'

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
    window.createUnityInstance(canvas, config, (progress) => {
      progressCallback(progress)
    }).then((unityInstance) => {
      progressCallback(1)
      window.unityInstance = unityInstance
    }).catch((message) => {
      alert(message)
    })
  }
  document.body.appendChild(script)
}
