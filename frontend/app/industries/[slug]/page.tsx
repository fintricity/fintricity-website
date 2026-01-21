import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { IndustryClient } from "@/components/industry-client"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allIndustries = await getContent('industries');
  const industry = allIndustries ? allIndustries[slug] : null;

  if (!industry) return { title: "Industry Not Found" };

  return {
    title: industry.title,
    description: industry.hero.subtitle,
    openGraph: {
      title: `Agentic AI for ${industry.title} | Kendra Labs`,
      description: industry.hero.subtitle,
    }
  }
}

export async function generateStaticParams() {
  const content = await getContent('industries');
  if (!content) return [];
  
  return Object.keys(content).filter(k => k !== '_index').map((slug) => ({
    slug: slug,
  }))
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  
  const allIndustries = await getContent('industries');
  const industryContent = allIndustries ? allIndustries[slug] : null;

  if (!industryContent) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <IndustryClient content={industryContent} />
      </main>

      <Footer />
    </div>
  )
}
