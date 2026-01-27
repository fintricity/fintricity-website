"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"

export function IndustryClient({ content }: { content: any }) {
  if (!content) return <div>Industry content not found</div>;

  return (
    <>
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="cyan">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Solutions Hub */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Solutions Hub</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.keySolutions?.map((sol: string, i: number) => (
              <GlassCard key={i} className="bg-fintricity-light-gray/20 border-0">
                <div className="text-fintricity-teal text-xl font-bold mb-4">0{i+1}</div>
                <h3 className="text-lg font-bold mb-2">{sol}</h3>
                <div className="text-fintricity-teal font-semibold text-sm cursor-pointer hover:text-fintricity-cyan transition-colors">
                  EXPLORE SOLUTION →
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for specific industry content - can be expanded later */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
           <GlassCard className="max-w-3xl mx-auto border-0 shadow-xl">
             <h3 className="mb-4">Why Fintricity for {content.title}?</h3>
             <p className="text-fintricity-charcoal">{content.description}</p>
           </GlassCard>
        </div>
      </section>

      {/* Final Industry CTA */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform {content.title}?</h2>
            <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our industry experts to discuss your specific automation challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cyan">Book a Strategy Session</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Read Industry Report</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
