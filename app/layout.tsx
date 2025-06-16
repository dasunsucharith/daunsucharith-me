import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dasun Sucharith - Portfolio',
  description: 'Developer & Digital Strategist Portfolio',
  keywords: 'web developer, digital strategist, portfolio, react, next.js',
  authors: [{ name: 'Dasun Sucharith' }],
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
        className={`${inter.className} antialiased bg-brand-base text-brand-accent`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}