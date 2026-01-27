"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"

function AccordionItem({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={onClick}
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-fintricity-navy' : 'text-fintricity-charcoal group-hover:text-fintricity-navy'}`}>
          {title}
        </span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-fintricity-charcoal leading-relaxed text-lg">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function HomeClient({ content }: { content: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Sleek Modern Hero Section with Animated Background */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-white bg-mesh-gradient animate-gradient-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="cyan" className="mb-8 px-4 py-1 text-xs uppercase tracking-widest">
                  {content.hero?.badge}
                </Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-h1-mobile md:text-h1"
              >
                {content.hero?.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12 max-w-2xl mx-auto text-fintricity-charcoal font-medium text-body-primary"
              >
                {content.hero.subtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Button size="lg" variant="cyan" className="group px-10 shadow-xl shadow-fintricity-cyan/20" asChild>
                  <Link href="/contact">
                    {content.hero?.primaryCTA} <span className="ml-2 transition-transform group-hover:translate-x-1">&#8594;</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-10 border-2" asChild>
                  <Link href="/case-studies">{content.hero?.secondaryCTA}</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>


        {/* The Problem Section */}
        <section className="py-32 bg-fintricity-navy text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                className="text-white mb-12 font-bold"
              >
                {content.theProblem?.title}
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                {content.theProblem?.points?.map((point: string, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="text-fintricity-cyan text-2xl font-bold">0{i+1}</div>
                    <p className="text-gray-300 font-medium mb-0">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Solution / Pillars */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-20 font-bold">{content.theSolution?.title}</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {content.theSolution?.pillars?.map((pillar: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="border-0 shadow-xl bg-fintricity-light-gray/30">
                    <div className="w-12 h-1 bg-fintricity-cyan mb-6 mx-auto rounded-full"></div>
                    <h3 className="mb-4 text-fintricity-navy font-semibold">{pillar.title}</h3>
                    <p className="text-fintricity-charcoal">{pillar.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="font-bold">{content.howWeWork?.title}</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {content.howWeWork?.phases?.map((phase: any, i: number) => (
                <div key={i} className="relative">
                  <div className="mb-6 text-fintricity-teal font-bold text-sm uppercase tracking-widest">{phase.duration}</div>
                  <h4 className="mb-4 font-semibold">{phase.title}</h4>
                  <p className="text-fintricity-charcoal text-sm">{phase.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 text-gray-200 text-3xl">→</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Points / Metrics */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {content.proofPoints?.metrics?.map((metric: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-bold text-fintricity-navy mb-2">{metric.value}</div>
                  <div className="text-xs font-bold text-fintricity-teal uppercase tracking-widest">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* High-Impact CTA Section */}
        <section className="py-24 bg-white px-4">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-fintricity-navy rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-fintricity-teal/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-fintricity-cyan/10 blur-[120px] rounded-full -ml-48 -mb-48"></div>

              <h2 className="text-white mb-8 relative z-10 max-w-3xl mx-auto font-bold">{content.cta?.title}</h2>
              <p className="text-fintricity-light-gray/70 mb-12 max-w-xl mx-auto relative z-10 text-lg">
                {content.cta?.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <Button size="lg" variant="cyan" className="px-12 py-7 text-lg" asChild>
                  <Link href="/contact">{content.cta?.primaryButton}</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-12 py-7 text-lg" asChild>
                  <Link href="/solutions">{content.cta?.secondaryButton}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  )
}
