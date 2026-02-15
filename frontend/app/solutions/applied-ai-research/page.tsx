

import { getContent } from "@/lib/content"
import { AppliedAIResearchDetailClient } from "@/components/applied-ai-research-detail-client"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent('solutions')
  const pageContent = content?.["applied-ai-research"]

  if (!pageContent) return { title: 'Applied AI Research Not Found' }

  return {
    title: `${pageContent.title} | Fintricity Solutions`,
    description: pageContent.description,
  }
}

export default async function AppliedAIResearchPage() {
  const content = await getContent('solutions')
  const pageContent = content?.["applied-ai-research"]

  if (!pageContent) notFound()

  return (
    <div className="flex min-h-screen flex-col bg-white">

      <main className="flex-1">
        <AppliedAIResearchDetailClient content={pageContent} />
      </main>

    </div>
  )
}
