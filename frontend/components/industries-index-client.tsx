"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

export function IndustriesIndexClient({ content, industries }: { content: any, industries: any[] }) {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-white bg-mesh-gradient">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="cyan" className="mb-6 px-4 py-1">
              {content.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-4xl mx-auto"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-fintricity-charcoal mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-fintricity-light-gray/50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industries.map((ind: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col bg-white border-0 shadow-sm overflow-hidden">
                  <div className="mb-6">
                    <Badge variant="teal" className="mb-3">{ind.hero.badge}</Badge>
                    <h3 className="text-2xl font-bold text-fintricity-navy mb-4">{ind.title}</h3>
                    <p className="text-fintricity-charcoal leading-relaxed mb-6">{ind.description}</p>
                    
                    <div className="space-y-2 mb-8">
                      <div className="text-xs font-bold text-fintricity-teal uppercase tracking-widest mb-3">Key Focus Areas</div>
                      {ind.keySolutions?.slice(0, 3).map((sol: string, j: number) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-fintricity-charcoal">
                          <span className="text-fintricity-cyan">•</span> {sol}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link href={`/industries/${ind.slug}`} className="text-fintricity-teal font-bold hover:text-fintricity-cyan transition-colors flex items-center group">
                      Explore {ind.title} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}