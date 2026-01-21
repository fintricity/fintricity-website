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
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-kendra-blue' : 'text-gray-700 group-hover:text-kendra-blue'}`}>
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
            <div className="pb-6 text-gray-600 leading-relaxed text-lg">
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

  // Map homepage features to specific internal pages
  const featureLinks = [
    "/platform/kendra-fabric",
    "/platform/kendra-identity", // SHIELD is part of Identity/Governance
    "/platform/model-engine-management" // Mesh Agnosticism
  ];

  return (
    <>
      {/* Webify Architect inspired Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8 flex justify-center"
              >
                <img src="/logo.svg" alt="Kendra Labs" className="h-20 w-auto" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Badge variant="outline" className="mb-6 px-4 py-1 border-kendra-blue text-kendra-blue font-medium">
                  {content.hero.badge}
                </Badge>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-kendra-blue mb-8"
              >
                The Operating System for the <span className="text-kendra-plum">Agentic Enterprise</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                {content.hero.subtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" variant="plum" className="group" asChild>
                  <Link href="/contact">
                    Contact Us <span className="ml-2 transition-transform group-hover:translate-x-1">&#8594;</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/platform">Explore the Platform</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid - The Problem/Solution */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-kendra-blue mb-4">{content.cognitiveTurn.title}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {content.cognitiveTurn.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {content.cognitiveTurn.features.map((feature: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 
                      ${i === 0 ? 'bg-kendra-orange/10 text-kendra-orange' : i === 1 ? 'bg-kendra-plum/10 text-kendra-plum' : 'bg-kendra-blue/10 text-kendra-blue'}`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-kendra-blue mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.desc}
                    </p>
                    <Link href={featureLinks[i] || "/platform"} className="text-kendra-blue font-semibold text-sm hover:underline">
                      Learn how we solve it →
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Key Points Accordion */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-kendra-blue">Platform Deep Dive</h2>
                <p className="text-gray-600 mt-4">Key pillars of the Kendra Labs architecture.</p>
              </div>
              <div className="border-t border-gray-200">
                {content.platformKeyPoints.map((item: any, i: number) => (
                  <AccordionItem 
                    key={i}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact / CTA Section */}
        <section className="py-24 bg-kendra-blue">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-kendra-blue/90 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden shadow-xl border border-kendra-blue/50"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">{content.cta.title}</h2>
              <p className="text-lg text-kendra-blue/20 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                {content.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Button size="lg" variant="plum" asChild>
                  <Link href="/contact">{content.cta.primaryButton}</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/platform">{content.cta.secondaryButton}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  )
}
