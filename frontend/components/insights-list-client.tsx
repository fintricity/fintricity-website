"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

interface InsightsListClientProps {
  title: string;
  subtitle: string;
  items: any[];
  type: 'blog' | 'news';
}

export function InsightsListClient({ title, subtitle, items, type }: InsightsListClientProps) {
  const featuredItem = items[0];
  const remainingItems = items.slice(1);

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 border-fintricity-navy text-fintricity-navy font-medium uppercase tracking-widest">
              {type === 'blog' ? 'The Blueprint' : 'Newsroom'}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-fintricity-navy mb-8">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-fintricity-charcoal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Item */}
      {featuredItem && (
        <section className="pb-24 bg-white">
          <div className="container mx-auto px-4">
            <Link href={`/insights/${featuredItem.slug}`} className="group">
              <div className="relative rounded-3xl overflow-hidden bg-gray-900 aspect-[21/9] flex items-end p-8 md:p-16 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                <div className="relative z-10 max-w-3xl">
                  <div className="flex gap-4 mb-6">
                    <Badge variant="cyan" className="bg-fintricity-teal text-white border-transparent uppercase tracking-wider font-bold">Featured</Badge>
                    <span className="text-gray-300 font-medium">{featuredItem.date}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight group-hover:text-blue-300 transition-colors">
                    {featuredItem.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 line-clamp-2 leading-relaxed">
                    {featuredItem.excerpt}
                  </p>
                  <div className="flex items-center text-white font-bold tracking-wide">
                    READ FULL STORY <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid of Remaining Items */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {remainingItems.map((item: any, i: number) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/insights/${item.slug}`} className="group block h-full">
                  <article className="flex flex-col h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-fintricity-navy hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-tighter">{item.date}</span>
                      {item.readTime && <span className="text-xs text-gray-400 italic">{item.readTime} read</span>}
                    </div>
                    <h3 className="text-2xl font-bold text-fintricity-navy mb-4 group-hover:text-fintricity-teal transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-fintricity-charcoal leading-relaxed mb-8 flex-grow">
                      {item.excerpt}
                    </p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag: string) => (
                          <span key={tag} className="text-[10px] font-bold uppercase px-2 py-1 bg-gray-100 text-gray-500 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="pt-6 border-t border-gray-100 text-fintricity-navy font-bold flex items-center group-hover:text-fintricity-teal">
                      View Story <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}