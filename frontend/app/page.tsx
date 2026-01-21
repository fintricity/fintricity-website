import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { HomeClient } from "@/components/home-client"

export default async function Home() {
  const content = await getContent('homepage');
  
  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-8 w-8 border-4 border-kendra-plum border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <HomeClient content={content} />
      </main>

      <Footer />
    </div>
  )
}
