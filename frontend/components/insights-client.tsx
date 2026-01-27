"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

export function InsightsClient({ content }: { content: any }) {
  return (
    <>
      {/* Insights Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="mb-6 px-4 py-1 border-fintricity-navy text-fintricity-navy font-medium">
              {content.hero.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-fintricity-navy mb-8"
          >
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-fintricity-charcoal mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cyan" asChild>
              <Link href="#blog">Read Our Blog</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#news">Latest News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Report Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg border border-gray-200">
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                  <Badge variant="cyan" className="mb-4 w-fit">Flagship Report</Badge>
                  <h2 className="text-4xl font-bold text-fintricity-navy mb-6 tracking-tight">{content.featuredReport.title}</h2>
                  <p className="text-fintricity-charcoal text-lg mb-8 leading-relaxed">
                    {content.featuredReport.subtitle}
                  </p>
                  <Button size="lg" variant="cyan" className="w-fit">
                    {content.featuredReport.cta} <span className="ml-2">📄</span>
                  </Button>
              </div>
              <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-100">
                  <div className="w-64 h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500 font-bold">
                    Architectures of Autonomy
                  </div>
              </div>
            </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-fintricity-navy mb-2">The Blueprint</h2>
              <p className="text-fintricity-charcoal">Expert commentary on the transition from generative to agentic enterprise.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.blogPosts.map((post: any) => (
              <GlassCard key={post.slug} className="flex flex-col">
                <span className="text-sm text-gray-500 mb-2">{post.date}</span>
                <h3 className="text-2xl font-bold text-fintricity-navy mb-4">{post.title}</h3>
                <p className="text-fintricity-charcoal mb-6 flex-grow">{post.excerpt}</p>
                <Link href={`/insights/${post.slug}`} className="text-fintricity-teal font-semibold hover:underline">
                  Read Full Story →
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Notes & News */}
      <section id="news" className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-fintricity-navy">
                      📰
                      Newsroom
                  </h3>
                  <div className="space-y-6">
                      {content.newsEntries.map((news: any) => (
                        <motion.div
                           key={news.slug}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           className="group p-6 border border-gray-200 rounded-xl hover:border-fintricity-navy transition-colors cursor-pointer bg-white shadow-sm"
                        >
                           <div className="flex justify-between items-start mb-4">
                              <Badge variant="outline" className="text-xs border-fintricity-navy/30 text-fintricity-navy bg-fintricity-navy/5">News</Badge>
                              <span className="text-xs text-gray-500">{news.date}</span>
                           </div>
                           <h4 className="text-xl font-bold mb-2 group-hover:text-fintricity-navy transition-colors">{news.title}</h4>
                           <p className="text-fintricity-charcoal mb-4">{news.excerpt}</p>
                           <Link href={`/insights/${news.slug}`} className="text-fintricity-navy text-sm font-medium flex items-center">
                              Read Press Release <span className="ml-1 text-sm">&#8599;</span>
                           </Link>
                        </motion.div>
                      ))}
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="border border-gray-200 rounded-2xl p-8 shadow-lg sticky top-24 bg-white"
                  >
                     <h4 className="text-2xl font-bold mb-4 flex items-center gap-2 text-fintricity-navy">
                        🔬
                        Lab Notes
                     </h4>
                     <div className="space-y-4 mb-8">
                        {content.labNotes.map((note: any) => (
                          <Link key={note.slug} href={`/insights/${note.slug}`} className="block group">
                            <span className="text-xs text-gray-400">{note.date}</span>
                            <h5 className="font-bold text-gray-800 group-hover:text-fintricity-navy transition-colors">{note.title}</h5>
                          </Link>
                        ))}
                     </div>
                     <h4 className="text-xl font-bold mb-4 text-fintricity-navy">Knowledge Base</h4>
                     <div className="space-y-2">
                       {content.knowledgeBase.items.map((item: any) => (
                         <div key={item} className="p-2 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-fintricity-charcoal hover:text-fintricity-navy cursor-pointer transition-colors">
                            {item}
                         </div>
                       ))}
                     </div>
                  </motion.div>
                </div>
            </div>
          </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Stay at the Frontier</h2>
            <p className="text-lg text-blue-200 mb-10 max-w-xl mx-auto">
              Get our latest research papers, architectural blueprints, and engineering notes delivered directly to your inbox.
            </p>
            <div className="flex justify-center">
               <Button size="lg" variant="cyan">Subscribe to Updates</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}