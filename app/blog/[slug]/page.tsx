import { Metadata } from 'next'
import { getPostBySlug } from '../../../lib/wordpress';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';
import { PageProps } from './page.props';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  const seo = post.seo || {};
  const featuredImage = post.featuredImage?.node?.sourceUrl;

  return {
    title: post.title,
    description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || `Read about ${post.title} by Dasun Sucharith`,
    keywords: [
      'Blog Post',
      'Web Development',
      'Marketing Automation',
      'Digital Strategy',
      'Dasun Sucharith'
    ],
    authors: [{ 
      name: post.author?.node?.name || 'Dasun Sucharith', 
      url: 'https://daunsucharith.me' 
    }],
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://daunsucharith.me/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || `Read about ${post.title}`,
      siteName: 'Dasun Sucharith Portfolio',
      publishedTime: post.date,
      modifiedTime: post.modified || post.date,
      authors: [post.author?.node?.name || 'Dasun Sucharith'],
      section: post.categories?.nodes?.[0]?.name || 'Technology',
      tags: post.tags?.nodes?.map((tag: any) => tag.name) || [],
      images: [
        {
          url: featuredImage || 'https://daunsucharith.me/assets/blog-default.webp',
          width: 1200,
          height: 630,
          alt: post.featuredImage?.node?.altText || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || `Read about ${post.title}`,
      images: [featuredImage || 'https://daunsucharith.me/assets/blog-default.webp'],
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
      canonical: `https://daunsucharith.me/blog/${post.slug}`,
    },
    category: post.categories?.nodes?.[0]?.name || 'technology',
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Generate schema markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || `Read about ${post.title}`,
    image: {
      '@type': 'ImageObject',
      url: post.featuredImage?.node?.sourceUrl || 'https://daunsucharith.me/assets/blog-default.webp',
      width: 1200,
      height: 630
    },
    author: {
      '@type': 'Person',
      name: post.author?.node?.name || 'Dasun Sucharith',
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
    datePublished: post.date,
    dateModified: post.modified || post.date,
    url: `https://daunsucharith.me/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://daunsucharith.me/blog/${post.slug}`
    },
    articleSection: post.categories?.nodes?.[0]?.name || 'Technology',
    keywords: post.tags?.nodes?.map((tag: any) => tag.name).join(', ') || 'web development, digital strategy',
    wordCount: post.content?.replace(/<[^>]*>/g, '').split(' ').length || 0,
    inLanguage: 'en-US',
    copyrightYear: new Date(post.date).getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Dasun Sucharith'
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0C0A0E' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full flex items-center justify-center relative overflow-hidden"
        style={{ position: 'relative', minHeight: '60vh', paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/Images/night-sky-background.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom'
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 z-15"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(12, 10, 14, 0.3) 40%, rgba(12, 10, 14, 0.7) 70%, #0C0A0E 100%)'
          }}
        />
        
        <div className="max-w-4xl mx-auto px-8 space-y-6 text-center relative z-30 h-full flex flex-col justify-center">
          {/* Back to Blog Link */}
          <div className="mb-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary-sky hover:text-primary-sky-light transition-colors duration-300 text-body-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <header className="text-center">
            <h1 className="heading-hero text-white mb-6">
              {post.title}
            </h1>
            <div className="text-body-lg text-white/80 mb-4">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="w-24 h-1 bg-primary-sky mx-auto"></div>
          </header>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-12">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          )}

          {/* Article Content */}
          <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div
              className="prose prose-lg md:prose-xl max-w-none prose-invert prose-headings:text-white prose-headings:font-josefin prose-h1:heading-section prose-h2:heading-subsection prose-h3:heading-component prose-p:text-body-lg prose-p:text-white/90 prose-p:leading-relaxed prose-a:text-primary-sky prose-a:no-underline hover:prose-a:text-primary-sky-light prose-strong:text-white prose-em:text-white/90 prose-blockquote:border-l-primary-sky prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:text-white/80 prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-code:text-primary-sky prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-ul:text-white/90 prose-ol:text-white/90 prose-li:text-white/90"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-primary-sky/50 rounded-2xl text-white hover:text-primary-sky transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-body-lg font-medium">Return to All Posts</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

