import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { InsightsClient } from "@/components/insights-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insights & Research",
  description: "Exploring the frontiers of Agentic AI. Technical deep dives, research hub, and lab notes from Kendra Labs.",
}

export default async function InsightsPage() {
  const content = await getContent('insights');

  if (!content || !content._index) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-foreground">Insights content not found.</div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <InsightsClient content={content._index} />
      </main>

      <Footer />
    </div>
  )
}