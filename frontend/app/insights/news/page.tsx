import { getContent } from "@/lib/content"
import { InsightsListClient } from "@/components/insights-list-client"

export default async function NewsPage() {
  const content = await getContent('insights');

  if (!content || !content._index) return null;

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">

      
      <main className="flex-1">
        <InsightsListClient 
          title="Newsroom" 
          subtitle="Latest updates and announcements from the Fintricity ecosystem." 
          items={content._index.newsEntries}
          type="news"
        />
      </main>


    </div>
  )
}
