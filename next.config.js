/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // for static export of html files
    unoptimized: true,
  },
}

module.exports = nextConfig
