export async function GET() {
  const manifest = {
    name: 'Dasun Sucharith - Marketing Automation Developer',
    short_name: 'Dasun Sucharith',
    description: 'Portfolio of Dasun Sucharith - Marketing Automation Developer specializing in HubSpot, WordPress, Webflow, and Shopify development',
    start_url: '/',
    display: 'standalone',
    background_color: '#0C0A0E',
    theme_color: '#0EA5E9',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    icons: [
      {
        src: '/assets/favicon.png',
        sizes: '48x48',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/assets/favicon.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/assets/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/assets/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    categories: ['portfolio', 'developer', 'business'],
    screenshots: [
      {
        src: '/assets/screenshot-desktop.png',
        type: 'image/png',
        sizes: '1280x720',
        form_factor: 'wide'
      },
      {
        src: '/assets/screenshot-mobile.png',
        type: 'image/png',
        sizes: '375x667',
        form_factor: 'narrow'
      }
    ]
  }

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}