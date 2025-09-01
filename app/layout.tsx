import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import { ThemeProvider } from '../contexts/ThemeContext'
import LenisScroller from '../components/LenisScroller'

export const metadata: Metadata = {
  title: 'Dasun Sucharith - Portfolio',
  description: 'Developer & Digital Strategist Portfolio',
  keywords: 'web developer, digital strategist, portfolio, react, next.js',
  authors: [{ name: 'Dasun Sucharith' }],
  icons: {
    icon: '/assets/favicon.png',
    shortcut: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cms.dasunsucharith.me" crossOrigin="" />
      </head>
      <body 
        className="antialiased bg-background text-foreground overflow-x-hidden"
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <LenisScroller />
          <Navigation />
          <main className="overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
