"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"

export function AppliedResearchClient({ content }: { content: any }) {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-white bg-mesh-gradient">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="cyan" className="mb-6 px-4 py-1">
              {content.hero.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 font-bold"
          >
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-fintricity-charcoal mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-fintricity-light-gray/50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {content.researchAreas.map((area: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="flex items-start gap-6 bg-white border-0 shadow-sm group">
                  <div className="text-4xl">{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-fintricity-navy mb-3 group-hover:text-fintricity-teal transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-fintricity-charcoal leading-relaxed">{area.desc}</p>
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