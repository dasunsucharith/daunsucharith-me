/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export to enable API routes
  // output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'via.placeholder.com'],
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
}

export default nextConfig
