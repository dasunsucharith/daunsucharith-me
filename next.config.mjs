/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export to enable API routes
  // output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    domains: ['localhost', 'via.placeholder.com', 'cms.dasunsucharith.me'],
  },
  async headers() {
    return [
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css; charset=utf-8',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://cms.dasunsucharith.me/wp-admin/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
