import { Metadata } from 'next'
import { notFound } from "next/navigation";
import { projects, getProject } from "../../../lib/projects";
import ProjectPageClient from "../../../components/ProjectPageClient";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    }
  }

  return {
    title: `${project.title} - Project by Dasun Sucharith | ${project.shortDescription}`,
    description: `${project.description.substring(0, 160)}...`,
    keywords: [
      project.title,
      'Web Development Project',
      'Marketing Automation', 
      'HubSpot Development',
      'WordPress Development',
      'Webflow Development',
      'Shopify Development',
      'Digital Strategy',
      'Dasun Sucharith Portfolio'
    ],
    authors: [{ name: 'Dasun Sucharith', url: 'https://daunsucharith.me' }],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://daunsucharith.me/projects/${project.slug}`,
      title: `${project.title} - Project by Dasun Sucharith`,
      description: project.shortDescription,
      siteName: 'Dasun Sucharith Portfolio',
      images: [
        {
          url: `https://daunsucharith.me${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} - Screenshot`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Project by Dasun Sucharith`,
      description: project.shortDescription,
      images: [`https://daunsucharith.me${project.image}`],
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
      canonical: `https://daunsucharith.me/projects/${project.slug}`,
    },
    category: 'technology',
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}