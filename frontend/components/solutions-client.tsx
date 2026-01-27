"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

export function SolutionsClient({ content }: { content: any }) {
  return (
    <>
      {/* Solutions Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white bg-mesh-gradient">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="cyan" className="mb-6 px-4 py-1 font-medium">
              {content.hero.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-fintricity-charcoal mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="cyan" asChild>
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/case-studies">See Case Studies</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities / Solutions List */}
      <section className="py-24 bg-fintricity-light-gray/50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2>Our Capabilities</h2>
            <p className="text-lg text-fintricity-charcoal max-w-2xl mx-auto leading-relaxed">
              We provide the strategic clarity and engineering excellence required to rewire your enterprise for AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.solutionsList.map((solution: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="flex flex-col h-full bg-white/80 border-0 shadow-sm">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 bg-fintricity-cyan/10`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-fintricity-navy mb-3">{solution.title}</h3>
                  <p className="text-fintricity-charcoal leading-relaxed mb-6 flex-grow">{solution.desc}</p>
                  <Link href={`/solutions/${solution.slug}`} className="text-fintricity-teal font-bold text-sm hover:text-fintricity-cyan transition-colors flex items-center group">
                    Explore Solution <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Impact Section */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-8">{content.economicImpact.title}</h2>
          <p className="mb-12 max-w-2xl mx-auto text-gray-300">
            {content.economicImpact.subtitle}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-fintricity-cyan mb-6 uppercase tracking-widest text-sm">The ROI Equation</h3>
            <div className="text-3xl md:text-5xl font-bold mb-8 italic">
              {content.economicImpact.roiFormula}
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
              {content.economicImpact.pricingModel}
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cyan" asChild>
              <Link href="/contact">{content.economicImpact.cta.primaryButton}</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/about">{content.economicImpact.cta.secondaryButton}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}