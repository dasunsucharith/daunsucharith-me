/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export to enable API routes
  // output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  // trailingSlash can break Next's app router chunk URLs on some hosts
  // and cause 404s like main-app.js / app-pages-internals.js
  // Remove it to keep asset paths intact
  // trailingSlash: true,
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
