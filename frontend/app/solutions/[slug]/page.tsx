import { getContent } from "@/lib/content"
import { SolutionDetailClient } from "@/components/solution-detail-client"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const content = await getContent('solutions')
  if (!content) return []
  return Object.keys(content).filter(k => k !== '_index').map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const content = await getContent('solutions')
  const solution = content?.[slug]

  if (!solution) return { title: 'Solution Not Found' }

  return {
    title: `${solution.title} | Fintricity`,
    description: solution.description,
  }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const content = await getContent('solutions')
  const solution = content?.[slug]

  if (!solution) notFound()

  return (
    <div className="flex min-h-screen flex-col bg-white">

      <main className="flex-1">
        <SolutionDetailClient content={solution} />
      </main>

    </div>
  )
}
