/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'via.placeholder.com'],
  },
  // Headers are not supported with static export
  ...(process.env.NODE_ENV !== 'production' && {
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
  }),
}

export default nextConfig