"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"

export function ProductClient({ content }: { content: any }) {
  if (!content) return <div>Product content not found</div>;

  return (
    <>
      {/* Product Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="plum" className="mb-6 px-4 py-1 text-kendra-plum font-medium bg-kendra-plum/10 border-transparent">
              {content.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-kendra-blue mb-8 max-w-4xl mx-auto"
          >
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="plum">
              Start Building
            </Button>
            <Button size="lg" variant="outline">
              Read Documentation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full">
                  <h3 className="text-xl font-bold text-kendra-blue mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section (Conditional) */}
      {content.deepDive && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-kendra-blue mb-6">{content.deepDive.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{content.deepDive.intro}</p>
              </motion.div>

              <div className="space-y-12">
                {content.deepDive.sections.map((section: any, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-8 items-start"
                  >
                    <div className="md:w-1/3">
                      <h3 className="text-2xl font-bold text-kendra-plum mb-2">{section.title}</h3>
                      <div className="h-1 w-12 bg-kendra-orange rounded-full"></div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-lg text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final Product CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-kendra-blue mb-6">Ready to deploy {content.title}?</h2>
            <div className="flex justify-center gap-4">
               <Button size="lg" variant="plum">Get Started</Button>
               <Button size="lg" variant="outline">View API Docs</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}