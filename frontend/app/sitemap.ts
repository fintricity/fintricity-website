import { MetadataRoute } from 'next'
import { getContent } from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.kendralabs.com'

  // Main pages
  const routes = ['', '/services', '/solutions', '/applied-research', '/industries', '/insights', '/about', '/contact', '/login', '/case-studies'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  )

  // Dynamic solutions
  const solutions = await getContent('solutions')
  const solutionRoutes = solutions ? Object.keys(solutions).filter(k => k !== '_index').map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  })) : []
  const industries = await getContent('industries')
  const industryRoutes = industries ? Object.keys(industries).filter(k => k !== '_index').map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  })) : []

  // Dynamic insights
  const insights = await getContent('insights')
  const insightRoutes = insights ? Object.keys(insights).filter(k => k !== '_index').map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  })) : []

  return [...routes, ...solutionRoutes, ...industryRoutes, ...insightRoutes]
}
