import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { ServicesClient } from "@/components/services-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Expert AI consulting and implementation services.",
}

export default async function ServicesPage() {
  const content = await getContent('services');

  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-foreground">Content not found.</div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">

      
      <main className="flex-1">
        <ServicesClient content={content._index} />
      </main>

      <Footer />
    </div>
  )
}
