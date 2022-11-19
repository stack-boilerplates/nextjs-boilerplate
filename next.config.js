/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
    styledComponents: true
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true
})

module.exports = withPWA(nextConfig)
