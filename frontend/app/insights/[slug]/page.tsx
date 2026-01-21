import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { GenericPageClient } from "@/components/generic-page-client"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allInsights = await getContent('insights');
  const insight = allInsights ? allInsights[slug] : null;

  if (!insight) return { title: "Insight Not Found" };

  return {
    title: insight.title,
    description: insight.description,
    keywords: insight.tags || [],
    openGraph: {
      title: `${insight.title} | Kendra Labs Insights`,
      description: insight.description,
    }
  }
}

export async function generateStaticParams() {
  const content = await getContent('insights');
  if (!content) return [];
  
  return Object.keys(content)
    .filter(key => key !== '_index' && key !== 'blog' && key !== 'news')
    .map((slug) => ({
      slug: slug,
    }))
}

export default async function InsightsSubPage({ params }: Props) {
  const { slug } = await params;
  
  const allInsights = await getContent('insights');
  const insightContent = allInsights ? allInsights[slug] : null;

  if (!insightContent) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <GenericPageClient content={insightContent} />
      </main>

      <Footer />
    </div>
  )
}
