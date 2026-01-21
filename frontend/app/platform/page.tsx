import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { PlatformClient } from "@/components/platform-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Platform",
  description: "A composable ecosystem of integrated components designed to solve the 'Box of Parts' problem in enterprise AI.",
}

export default async function PlatformPage() {
  const content = await getContent('platform'); // Fetch platform content

  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-foreground">Platform content not found.</div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <PlatformClient content={content} /> {/* Use the PlatformClient */}
      </main>

      <Footer />
    </div>
  )
}