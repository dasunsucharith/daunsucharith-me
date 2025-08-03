import { MetadataRoute } from 'next'
import { getAllPosts } from '../../lib/wordpress'
import { projects } from '../../lib/projects'

export async function GET() {
  const baseUrl = 'https://daunsucharith.me'
  
  // Get blog posts from WordPress
  const posts = await getAllPosts()
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]
  
  // Project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Blog post pages
  const blogPages = posts?.edges?.map(({ node }: any) => ({
    url: `${baseUrl}/blog/${node.slug}`,
    lastModified: new Date(node.modified || node.date),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  })) || []
  
  const sitemap = [...staticPages, ...projectPages, ...blogPages]
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((item) => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}