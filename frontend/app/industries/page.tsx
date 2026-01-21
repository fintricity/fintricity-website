import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { IndustriesIndexClient } from "@/components/industries-index-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industry Specialization",
  description: "Tailored agentic solutions for Financial Services, Healthcare, Technology, Retail, and Manufacturing.",
}

export default async function IndustriesPage() {
  const content = await getContent('industries');

  if (!content) return null;

  const indexContent = content._index;
  // Convert object to array, filtering out the index key
  const industriesList = Object.keys(content)
    .filter(key => key !== '_index')
    .map(key => ({
      slug: key,
      ...content[key]
    }));

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <IndustriesIndexClient content={indexContent} industries={industriesList} />
      </main>

      <Footer />
    </div>
  )
}
