import { getContent } from "@/lib/content"
import { InsightsListClient } from "@/components/insights-list-client"

export default async function BlogPage() {
  const content = await getContent('insights');

  if (!content || !content._index) return null;

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">

      
      <main className="flex-1">
        <InsightsListClient 
          title="The Blueprint" 
          subtitle="Expert commentary on the transition from generative to agentic enterprise." 
          items={content._index.blogPosts}
          type="blog"
        />
      </main>


    </div>
  )
}
