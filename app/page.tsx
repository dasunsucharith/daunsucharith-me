import { Metadata } from 'next'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import PodcastSection from '../components/sections/PodcastSection'
import AppsHubSection from '../components/sections/AppsHubSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export const metadata: Metadata = {
  title: 'Dasun Sucharith - Marketing Automation Developer & Digital Strategist',
  description: 'Experienced Marketing Automation Developer specializing in HubSpot, WordPress, Webflow, and Shopify. Creating digital experiences that bridge marketing and technology for enterprise clients.',
  keywords: [
    'Marketing Automation Developer',
    'HubSpot Developer',
    'WordPress Developer', 
    'Webflow Developer',
    'Shopify Developer',
    'Digital Strategy',
    'Marketing Technology',
    'Web Development',
    'SEO Optimization',
    'Lead Generation',
    'Dasun Sucharith'
  ],
  authors: [{ name: 'Dasun Sucharith', url: 'https://daunsucharith.me' }],
  creator: 'Dasun Sucharith',
  publisher: 'Dasun Sucharith',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://daunsucharith.me',
    title: 'Dasun Sucharith - Marketing Automation Developer & Digital Strategist',
    description: 'Experienced Marketing Automation Developer specializing in HubSpot, WordPress, Webflow, and Shopify. Creating digital experiences that bridge marketing and technology.',
    siteName: 'Dasun Sucharith Portfolio',
    images: [
      {
        url: 'https://daunsucharith.me/assets/dasun-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Dasun Sucharith - Marketing Automation Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dasun Sucharith - Marketing Automation Developer & Digital Strategist',
    description: 'Experienced Marketing Automation Developer specializing in HubSpot, WordPress, Webflow, and Shopify.',
    images: ['https://daunsucharith.me/assets/dasun-og-image.webp'],
    creator: '@dasunsucharith',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://daunsucharith.me',
  },
  category: 'technology',
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dasun Sucharith',
    jobTitle: 'Marketing Automation Developer',
    description: 'Experienced Marketing Automation Developer specializing in HubSpot, WordPress, Webflow, and Shopify development',
    url: 'https://daunsucharith.me',
    image: 'https://daunsucharith.me/assets/dasun.webp',
    email: 'sucharith.dasun@gmail.com',
    telephone: '+94-77-123-4567',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LK',
      addressLocality: 'Sri Lanka'
    },
    sameAs: [
      'https://www.linkedin.com/in/dasun-sucharith/',
      'https://github.com/dasunsucharith',
      'https://twitter.com/dasunsucharith'
    ],
    knowsAbout: [
      'Marketing Automation',
      'HubSpot Development',
      'WordPress Development',
      'Webflow Development', 
      'Shopify Development',
      'Digital Strategy',
      'SEO Optimization',
      'Lead Generation',
      'Web Development'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Marketing Automation Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Sri Lanka'
      },
      skills: [
        'HubSpot',
        'WordPress',
        'Webflow', 
        'Shopify',
        'React',
        'Next.js',
        'TypeScript',
        'Marketing Automation',
        'Digital Strategy'
      ]
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
      description: 'Independent Marketing Automation Developer'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <AppsHubSection />
      <PodcastSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  )
}
