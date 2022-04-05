export default function renderWebGL() {
  var canvas = document.querySelector('#unity-canvas')
  var loadingBar = document.querySelector('#unity-loading-bar')
  var progressBarFull = document.querySelector('#unity-progress-bar-full')

  canvas.style.width = window.innerWidth + 'px'
  canvas.style.height = (window.innerHeight - 200) + 'px'
  loadingBar.style.display = 'block'

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
