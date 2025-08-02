import { getPostBySlug } from '../../../lib/wordpress';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageProps } from './page.props';

export default async function PostPage({ params }: PageProps) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-24 bg-primary-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary-black">{post.title}</h1>
          <div className="text-sm text-primary-gray-dark/70 mb-8 text-center">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          {post.featuredImage && (
            <div className="mb-8">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                width={1200}
                height={630}
                className="rounded-lg"
                priority
              />
            </div>
          )}
          <div
            className="prose lg:prose-xl max-w-none prose-slate"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </section>
  );
}

