import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { GenericPageClient } from "@/components/generic-page-client"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allSolutions = await getContent('solutions');
  const solution = allSolutions ? allSolutions[slug] : null;

  if (!solution) return { title: "Solution Not Found" };

  return {
    title: solution.title,
    description: solution.description,
    openGraph: {
      title: `${solution.title} | Kendra Labs Solutions`,
      description: solution.description,
    }
  }
}

export async function generateStaticParams() {
  const content = await getContent('solutions');
  if (!content) return [];
  
  return Object.keys(content)
    .filter(key => key !== '_index')
    .map((slug) => ({
      slug: slug,
    }))
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  
  const allSolutions = await getContent('solutions');
  const solutionContent = allSolutions ? allSolutions[slug] : null;

  if (!solutionContent) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <GenericPageClient content={solutionContent} />
      </main>

      <Footer />
    </div>
  )
}