export default function renderWebGL(progressCallback, defaultHeight) {
  var canvas = document.querySelector('#unity-canvas')
  if (!canvas) {
    return
  }

  canvas.style.width = window.innerWidth + 'px'
  canvas.style.height = (defaultHeight || window.innerHeight) + 'px'

  var buildUrl = '/space/Build'
  var loaderUrl = buildUrl + '/temple_of_muse_build.loader.js'
  var config = {
    dataUrl: buildUrl + '/temple_of_muse_build.data',
    frameworkUrl: buildUrl + '/temple_of_muse_build.framework.js',
    codeUrl: buildUrl + '/temple_of_muse_build.wasm',
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
