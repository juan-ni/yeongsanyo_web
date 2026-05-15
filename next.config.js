/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/2',
        destination: '/', // 혹은 https://yeongsanyo.shop
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig