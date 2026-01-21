import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { ProductClient } from "@/components/product-client"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allProducts = await getContent('products');
  const product = allProducts ? allProducts[slug] : null;

  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.hero.subtitle,
    openGraph: {
      title: `${product.title} | Kendra Labs`,
      description: product.hero.subtitle,
    }
  }
}

export async function generateStaticParams() {
  const content = await getContent('products');
  if (!content) return [];
  
  return Object.keys(content).map((slug) => ({
    slug: slug,
  }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  
  const allProducts = await getContent('products');
  const productContent = allProducts ? allProducts[slug] : null;

  if (!productContent) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1">
        <ProductClient content={productContent} />
      </main>

      <Footer />
    </div>
  )
}
