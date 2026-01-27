"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

export function SolutionDetailClient({ content }: { content: any }) {
  if (!content) return <div>Solution not found</div>;

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
            className="mb-8"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-fintricity-charcoal mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="cyan" asChild>
              <Link href="/contact">Book a Strategy Session</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-fintricity-light-gray/50">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-4xl mx-auto border-0 shadow-xl bg-white">
            <h2 className="mb-8">Driving Measurable ROI</h2>
            <p className="text-lg mb-8 text-fintricity-charcoal">
              Our {content.title} approach is built on years of experience in regulated industries. We don't just deliver technology; we deliver business outcomes.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-fintricity-light-gray/50">
                <div className="font-bold text-fintricity-navy mb-2">Production-Ready</div>
                <p className="text-sm text-fintricity-charcoal">We focus on systems that scale and meet the rigorous demands of enterprise operations.</p>
              </div>
              <div className="p-6 rounded-2xl bg-fintricity-light-gray/50">
                <div className="font-bold text-fintricity-navy mb-2">Compliance-First</div>
                <p className="text-sm text-fintricity-charcoal">Built-in governance and risk frameworks ensure every AI system is audit-ready.</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
