"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"

export function AboutClient({ content }: { content: any }) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white bg-mesh-gradient">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="cyan" className="mb-6 px-4 py-1">
              {content.hero.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 max-w-4xl mx-auto font-bold"
          >
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-fintricity-charcoal mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {content.pillars.map((pillar: any, i: number) => (
              <GlassCard key={i} className="border-0 shadow-sm bg-fintricity-light-gray/30">
                <h3 className="mb-4 text-fintricity-navy font-semibold">{pillar.title}</h3>
                <p className="text-fintricity-charcoal text-sm leading-relaxed">{pillar.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-fintricity-navy text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-12 font-bold">{content.story.title}</h2>
            <div className="space-y-6 text-lg text-gray-300">
              {content.story.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-20 font-bold">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.map((v: any, i: number) => (
              <div key={i} className="p-6 border-l-2 border-fintricity-cyan hover:bg-fintricity-light-gray/50 transition-colors">
                <h4 className="font-bold mb-3">{v.title}</h4>
                <p className="text-sm text-fintricity-charcoal">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}