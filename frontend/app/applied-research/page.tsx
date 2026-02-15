import { getContent } from "@/lib/content"
import { AppliedResearchClient } from "@/components/applied-research-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Applied Research",
  description: "Pushing the boundaries of Agentic AI.",
}

export default async function AppliedResearchPage() {
  const content = await getContent('applied-research');

  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-foreground">Content not found.</div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">

      
      <main className="flex-1">
        <AppliedResearchClient content={content._index} />
      </main>


    </div>
  )
}
