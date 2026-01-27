import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { IndustryClient } from "@/components/industry-client"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const content = await getContent('industries')
  if (!content) return []
  return Object.keys(content).filter(k => k !== '_index').map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const content = await getContent('industries')
  const industry = content?.[slug]

  if (!industry) return { title: 'Industry Not Found' }

  return {
    title: `${industry.title} | Fintricity`,
    description: industry.description,
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const content = await getContent('industries')
  const industry = content?.[slug]

  if (!industry) notFound()

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <IndustryClient content={industry} />
      </main>
      <Footer />
    </div>
  )
}