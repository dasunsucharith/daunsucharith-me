import type { Metadata } from 'next'
import { Inter, Josefin_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })
const josefinSans = Josefin_Sans({ subsets: ['latin'] })

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
      <body 
        className={`${inter.className} antialiased bg-brand-base text-brand-accent overflow-x-hidden`}
        suppressHydrationWarning={true}
        style={{'--font-josefin': josefinSans.style.fontFamily, '--font-inter': inter.style.fontFamily} as React.CSSProperties}
      >
        <Navigation />
        <main className="overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
