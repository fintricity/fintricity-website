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
      <section className="relative py-24 md:py-32 overflow-hidden bg-fintricity-navy text-white bg-mesh-gradient animate-gradient-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="cyan" className="mb-6 px-4 py-1 uppercase tracking-widest bg-fintricity-cyan/10 border-fintricity-cyan/20 text-fintricity-cyan">
              {content.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h1-mobile md:text-h1 text-white mb-8"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-2xl mx-auto text-fintricity-light-gray font-medium text-body-primary"
          >
            {content.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
              <Link href="/contact">Book a Strategy Session</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-10 border-white text-white hover:bg-white/10" asChild>
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area - Flexible HTML */}
      {content.htmlContent && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto enterprise-paper" dangerouslySetInnerHTML={{ __html: content.htmlContent }} />
          </div>
        </section>
      )}

      {/* Key Offerings Section */}
      {content.keyOfferings && content.keyOfferings.length > 0 && (
        <section className="py-24 bg-fintricity-light-gray/50">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Key Offerings</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.keyOfferings.map((offering: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm"
                >
                  <span className="text-fintricity-teal text-3xl">{offering.icon || '✨'}</span>
                  <div>
                    <h3 className="mb-2">{offering.title}</h3>
                    <p className="text-fintricity-charcoal text-body-primary">{offering.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Generic CTA Section */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Drive Impact?</h2>
          <p className="text-fintricity-light-gray text-body-primary mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your specific needs and how Fintricity can help.
          </p>
          <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}