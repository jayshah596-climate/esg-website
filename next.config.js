/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['accionland.com', 'topmate.io', 'via.placeholder.com'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
