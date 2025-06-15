/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'via.placeholder.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

export default nextConfig