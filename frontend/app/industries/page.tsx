import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { IndustriesIndexClient } from "@/components/industries-index-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries",
  description: "Fintricity partners with financial institutions, insurers, healthcare providers, and industrial manufacturers to architect and deploy AI solutions.",
}

export default async function IndustriesPage() {
  const content = await getContent('industries');

  if (!content) return (
    <div className="min-h-screen flex items-center justify-center bg-white text-foreground">
      Content not found.
    </div>
  );

  const industries = Object.keys(content)
    .filter(k => k !== '_index')
    .map(key => ({ ...content[key], slug: key }));

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <IndustriesIndexClient content={content._index} industries={industries} />
      </main>

      <Footer />
    </div>
  )
}