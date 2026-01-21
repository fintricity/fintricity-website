import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { AboutClient } from "@/components/about-client"

export default async function CompanyPage() {
  const content = await getContent('about');

  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-foreground">Content not found.</div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <AboutClient content={content} />
      </main>

      <Footer />
    </div>
  )
}
