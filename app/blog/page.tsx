import { Metadata } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../lib/wordpress';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'The Digital Canvas - Blog by Dasun Sucharith | Web Dev & Tech Insights',
  description: 'Explore the latest in web development, marketing automation, and digital strategy. Expert insights on HubSpot, WordPress, Webflow, and modern development practices.',
  keywords: [
    'Web Development Blog',
    'Marketing Automation Blog', 
    'HubSpot Tips',
    'WordPress Development',
    'Webflow Tutorials',
    'Digital Strategy',
    'Tech Blog',
    'Development Insights',
    'Dasun Sucharith Blog'
  ],
  authors: [{ name: 'Dasun Sucharith', url: 'https://daunsucharith.me' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://daunsucharith.me/blog',
    title: 'The Digital Canvas - Blog by Dasun Sucharith',
    description: 'Expert insights on web development, marketing automation, and digital strategy. Learn about HubSpot, WordPress, Webflow, and modern development practices.',
    siteName: 'Dasun Sucharith Portfolio',
    images: [
      {
        url: 'https://daunsucharith.me/assets/blog-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'The Digital Canvas - Tech Blog by Dasun Sucharith',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Digital Canvas - Blog by Dasun Sucharith',
    description: 'Expert insights on web development, marketing automation, and digital strategy.',
    images: ['https://daunsucharith.me/assets/blog-og-image.webp'],
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
    canonical: 'https://daunsucharith.me/blog',
  },
}

interface PostNode {
  node: {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
  };
}

export default async function BlogPage() {
  const allPosts: { edges: PostNode[] } = await getAllPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Digital Canvas',
    description: 'Expert insights on web development, marketing automation, and digital strategy by Dasun Sucharith',
    url: 'https://daunsucharith.me/blog',
    author: {
      '@type': 'Person',
      name: 'Dasun Sucharith',
      url: 'https://daunsucharith.me',
      sameAs: [
        'https://www.linkedin.com/in/dasun-sucharith/',
        'https://github.com/dasunsucharith',
        'https://twitter.com/dasunsucharith'
      ]
    },
    publisher: {
      '@type': 'Person',
      name: 'Dasun Sucharith',
      url: 'https://daunsucharith.me'
    },
    blogPost: allPosts?.edges?.slice(0, 10).map(({ node }) => ({
      '@type': 'BlogPosting',
      headline: node.title,
      url: `https://daunsucharith.me/blog/${node.slug}`,
      datePublished: node.date,
      author: {
        '@type': 'Person',
        name: 'Dasun Sucharith'
      },
      image: node.featuredImage?.node?.sourceUrl || 'https://daunsucharith.me/assets/blog-default.webp'
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <div
      className="min-h-screen"
      style={{ backgroundColor: '#0C0A0E' }}
    >
      <section
        id="hero"
        className="w-full flex items-center justify-center relative overflow-hidden"
        style={{ position: 'relative', minHeight: '70vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/Images/night-sky-background.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom'
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 z-15"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(12, 10, 14, 0.3) 40%, rgba(12, 10, 14, 0.7) 70%, #0F0D11 100%)'
          }}
        />
        <div className="max-w-4xl mx-auto px-8 space-y-8 text-center relative z-30 h-full flex flex-col justify-center">
          <header className="text-center">
            <h1 className="heading-hero text-white gradient-text">
              The Digital Canvas
            </h1>
            <p className="text-body-lg text-white/80 mt-4 max-w-3xl mx-auto">
              Exploring the latest in web development, design, and tech.
              A collection of thoughts, tutorials, and stories.
            </p>
          </header>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allPosts.edges.map(({ node }) => (
            <Link href={`/blog/${node.slug}`} key={node.slug}>
              <div className="group bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden rounded-2xl flex flex-col h-full">
                {node.featuredImage && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={node.featuredImage.node.sourceUrl}
                      alt={node.featuredImage.node.altText || node.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="heading-component text-white group-hover:text-primary-sky transition-colors duration-300 line-clamp-2">
                    {node.title}
                  </h2>
                  <div
                    className="text-body text-white/70 my-4 flex-grow line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                  <div className="text-body-sm text-white/60 mt-auto pt-4 border-t border-white/10">
                    {new Date(node.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}
