import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { ContactClient } from "@/components/contact-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Connect with Fintricity to discuss autonomous AI agents, partnership opportunities, or enterprise automation.",
}

export default async function ContactPage() {
  const content = await getContent('contact');

  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-foreground">Content not found.</div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">

      
      <main className="flex-1">
        <ContactClient content={content} />
      </main>

      <Footer />
    </div>
  )
}
