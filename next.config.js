/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [{
      source: '/space/Build/(.+\.gz)',
      headers: [{ key: 'Content-Encoding', value: 'gzip' }]
    }, {
      source: '/space/Build/(.+\.wasm\.gz)',
      headers: [{ key: 'Content-Type', value: 'application/wasm' }]
    }]
  }
}
