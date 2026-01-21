"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import { PlatformVisualization } from "@/components/platform-visualization"
import Link from "next/link"

// Helper to map component titles to slugs
const getSlug = (title: string) => {
  const map: any = {
    "Workbench": "/platform/kendra-workbench",
    "Agentic Mesh": "/platform/agentic-mesh",
    "Data Fabric": "/platform/kendra-data-fabric",
    "Model Engine": "/platform/model-engine-management",
    "Evaluation": "/platform/kendra-evaluation",
    "AIOps Platform": "/platform/kendra-build", // Mapping AIOps to Build based on content similarity
    "Agents Platform": "/platform/kendra-identity", // Loose mapping for identity/agents
  };
  return map[title] || "#";
}

export function PlatformClient({ content }: { content: any }) {
  return (
    <>
      {/* Distinct Platform Hero - Darker Theme for Contrast */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="mb-6 px-4 py-1 border-kendra-orange text-kendra-orange font-medium bg-kendra-orange/10">
              {content.hero.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto"
          >
             The Operating System for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-kendra-blue to-kendra-plum">Autonomous Enterprise AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="w-full max-w-5xl mx-auto rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden group shadow-2xl"
          >
             <PlatformVisualization />
          </motion.div>
        </div>
      </section>

      {/* Platform Thesis Section */}
      {content.thesis && (
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-kendra-blue mb-6">
                {content.thesis.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                {content.thesis.content}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Feature Deep Dives - Alternating Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-32">
          {content.components.map((component: any, i: number) => {
            const slug = getSlug(component.title);
            const isEven = i % 2 === 0;

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                <div className="lg:w-1/2">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm border border-gray-100
                    ${i % 3 === 0 ? 'bg-blue-50 text-blue-600' : i % 3 === 1 ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'}`}>
                    {component.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{component.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {component.desc}
                  </p>
                  {slug !== "#" && (
                    <Button variant="outline" className="group" asChild>
                      <Link href={slug}>
                        Explore {component.title} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </Button>
                  )}
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className={`aspect-video rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex items-center justify-center relative overflow-hidden group
                    ${isEven ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform duration-500`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-50"></div>
                      <span className="text-gray-400 font-medium">UI Preview: {component.title}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Platform CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-kendra-blue mb-6">Ready to architect the future?</h2>
            <div className="flex justify-center gap-4">
               <Button size="lg" variant="plum">{content.cta.primaryButton}</Button>
               <Button size="lg" variant="outline">{content.cta.secondaryButton}</Button>
            </div>
        </div>
      </section>
    </>
  )
}
