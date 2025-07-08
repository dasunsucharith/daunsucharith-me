import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../lib/wordpress';

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

  return (
    <section className="py-24 bg-light-base dark:bg-brand-base">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-light-strong dark:text-brand-accent">
          Blog
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.edges.map(({ node }) => (
            <Link href={`/blog/${node.slug}`} key={node.slug}>
              <div className="group block bg-light-surface dark:bg-brand-surface rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {node.featuredImage && (
                  <div className="relative h-48">
                    <Image
                      src={node.featuredImage.node.sourceUrl}
                      alt={node.featuredImage.node.altText || node.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-light-strong dark:text-white group-hover:text-light-accent dark:group-hover:text-brand-accent">
                    {node.title}
                  </h2>
                  <div
                    className="text-light-muted dark:text-gray-400 text-sm mb-4"
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                  <div className="text-xs text-gray-500 dark:text-gray-500">
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
      </div>
    </section>
  );
}
