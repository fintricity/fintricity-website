import { MetadataRoute } from 'next'
import { getContent } from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.kendralabs.com'

  // Main pages
  const routes = ['', '/platform', '/solutions', '/industries', '/insights', '/about', '/contact', '/login'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  )

  // Dynamic products
  const products = await getContent('products')
  const productRoutes = products ? Object.keys(products).map((slug) => ({
    url: `${baseUrl}/platform/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  })) : []

  // Dynamic industries
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

  return [...routes, ...productRoutes, ...industryRoutes, ...insightRoutes]
}
