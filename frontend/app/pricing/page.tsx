import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { PricingClient } from "@/components/pricing-client"

export default async function PricingPage() {
  const content = await getContent('pricing');

  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-foreground">Content not found.</div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <PricingClient content={content} />
      </main>

      <Footer />
    </div>
  )
}
