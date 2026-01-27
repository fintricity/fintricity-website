"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

export function GenericPageClient({ content }: { content: any }) {
  if (!content) return <div>Content not found</div>;

  return (
    <article className="bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Badge variant="cyan" className="bg-fintricity-teal text-white uppercase tracking-wider font-bold border-transparent">
                  {content.badge || "Insight"}
                </Badge>
                {content.date && <span className="text-gray-400 font-medium text-sm">{content.date}</span>}
                {content.readTime && <span className="text-gray-400 font-medium text-sm">• {content.readTime} read</span>}
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-fintricity-navy mb-8 leading-[1.1]">
                {content.title}
              </h1>
              
              {content.author && (
                <div className="flex items-center gap-3 mb-10 pb-10 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                    {content.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-fintricity-navy">{content.author}</div>
                    <div className="text-xs text-gray-400">Kendra Labs Team</div>
                  </div>
                </div>
              )}

              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-bold mt-12 mb-12">
                {content.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <div 
               className="enterprise-paper"
               dangerouslySetInnerHTML={{ __html: content.content || "<p>Content coming soon...</p>" }} 
             />
             
             {content.tags && (
               <div className="mt-20 pt-10 border-t border-gray-100">
                 <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Topic Tags</div>
                 <div className="flex flex-wrap gap-3">
                   {content.tags.map((tag: string) => (
                     <Link key={tag} href={`/insights`} className="px-4 py-2 bg-gray-50 text-fintricity-charcoal rounded-full text-sm font-medium hover:bg-fintricity-navy hover:text-white transition-colors">
                       #{tag}
                     </Link>
                   ))}
                 </div>
               </div>
             )}
          </div>
        </div>
      </section>

      {/* Recommended Functionality: "Read Next" Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-fintricity-navy mb-10">Continue the Journey</h2>
           <div className="flex justify-center gap-6">
             <Button size="lg" variant="cyan" asChild>
               <Link href="/insights/blog">View All Articles</Link>
             </Button>
             <Button size="lg" variant="outline" asChild>
               <Link href="/contact">Speak to an Architect</Link>
             </Button>
           </div>
        </div>
      </section>
    </article>
  )
}