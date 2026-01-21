"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

export function IndustriesIndexClient({ content, industries }: { content: any, industries: any[] }) {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="mb-6 px-4 py-1 border-kendra-blue text-kendra-blue font-medium">
              {content.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-kendra-blue mb-8 max-w-4xl mx-auto"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className="mb-6">
                    <Badge variant="plum" className="mb-3">{ind.hero.badge}</Badge>
                    <h3 className="text-2xl font-bold text-kendra-blue mb-2">{ind.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{ind.description}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link href={`/industries/${ind.slug}`} className="text-kendra-plum font-semibold hover:text-kendra-blue transition-colors flex items-center">
                      Explore Solutions <span className="ml-2">→</span>
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
