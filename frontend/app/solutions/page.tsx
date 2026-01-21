import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { SolutionsClient } from "@/components/solutions-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions",
  description: "Translate autonomy into economic outcomes. Discover agentic solutions for autonomous engineering, intelligent operations, and compliance.",
}

export default async function SolutionsPage() {
  const content = await getContent('solutions');

  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-foreground">Content not found.</div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <SolutionsClient content={content._index} />
      </main>

      <Footer />
    </div>
  )
}
