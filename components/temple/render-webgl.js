export default function renderWebGL(progressCallback, defaultHeight, config) {
  var canvas = document.querySelector('#unity-canvas')
  if (!canvas) {
    return
  }

  canvas.style.width = window.innerWidth + 'px'
  canvas.style.height = (defaultHeight || window.innerHeight) + 'px'

  if (!config) {
    // var buildUrl = 'https://dww4fzr5k5i0x.cloudfront.net/temple/space-bmr-expo/Build'
    // var buildUrl = 'https://dww4fzr5k5i0x.cloudfront.net/temple/space-simple/Build'
    // var buildUrl = 'https://bmrnft-public.s3.us-west-1.amazonaws.com/temple/space-simple/Build'
    var buildUrl = '/space/Build'
    var config = {
      loaderUrl: buildUrl + '/temple_of_muse_build_webgl.loader.js',
      dataUrl: buildUrl + '/temple_of_muse_build_webgl.data.gz',
      frameworkUrl: buildUrl + '/temple_of_muse_build_webgl.framework.js.gz',
      codeUrl: buildUrl + '/temple_of_muse_build_webgl.wasm.gz',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'BMR LAB',
      productName: 'Temple Of Muse',
      productVersion: '0.1',
    }
  }

  var script = document.createElement('script')
  script.src = config.loaderUrl
  script.onload = () => {
    window.createUnityInstance(canvas, config, (progress) => {
      progressCallback(progress)
    }).then((unityInstance) => {
      progressCallback(1)
      window.unityInstance = unityInstance
      window.addEventListener('resize', () => {
        canvas.style.width = window.innerWidth + 'px'
        canvas.style.height = (defaultHeight || window.innerHeight) + 'px'
      })
    }).catch((err) => {
      alert(err.message || '加载失败')
    })
  }
  document.body.appendChild(script)
}
