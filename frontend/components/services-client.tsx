"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

export function ServicesClient({ content }: { content: any }) {
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
            <Button size="lg" variant="cyan" className="group" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {content.servicesList.map((service: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 bg-fintricity-navy/10 text-fintricity-navy`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-fintricity-navy mb-3">{service.title}</h3>
                  <p className="text-fintricity-charcoal leading-relaxed mb-6 flex-grow">{service.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
