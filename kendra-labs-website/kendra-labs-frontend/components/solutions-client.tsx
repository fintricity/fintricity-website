"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"

export function SolutionsClient({ content }: { content: any }) {
  return (
    <>
      {/* Solutions Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="mb-6 px-4 py-1 border-kendra-blue text-kendra-blue font-medium">
              {content.hero.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-kendra-blue mb-8"
          >
            Translate Autonomy <br className="hidden md:block" /> into <span className="text-kendra-orange">Economic Outcomes</span>
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
            <Button size="lg" variant="plum" className="group">
              Explore Solutions <span className="ml-2 transition-transform group-hover:translate-x-1">&#8594;</span>
            </Button>
            <Button size="lg" variant="outline">
              Talk to an Expert
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Function */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kendra-blue mb-4">Solutions by Function</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Leverage autonomous agents to revolutionize core business functions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.solutionsByFunction.map((solution: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 ${["bg-kendra-orange/10 text-kendra-orange", "bg-kendra-plum/10 text-kendra-plum", "bg-kendra-blue/10 text-kendra-blue"][i % 3]}`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-kendra-blue mb-3">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kendra-blue mb-4">Industry Specialization</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tailored agentic solutions for the unique challenges and opportunities in your sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.solutionsByIndustry.map((industry: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 ${["bg-kendra-blue/10 text-kendra-blue", "bg-kendra-plum/10 text-kendra-plum", "bg-kendra-orange/10 text-kendra-orange"][i % 3]}`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-kendra-blue mb-3">{industry.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{industry.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

      {/* Economic Impact Section */}
      <section className="py-24 bg-kendra-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Economic Imperative</h2>
            <p className="text-lg text-kendra-blue/20 mb-10 max-w-2xl mx-auto leading-relaxed">
              {content.economicImpact.subtitle}
            </p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden"
            >
              <h3 className="text-xl font-mono mb-6 text-kendra-orange relative z-10">The ROI Equation</h3>
              <div className="text-3xl md:text-5xl font-bold mb-8 font-serif italic relative z-10 text-white">
                {content.economicImpact.roiFormula}
              </div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto relative z-10 font-medium">
                {content.economicImpact.pricingModel}
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="plum">{content.economicImpact.cta.primaryButton}</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">{content.economicImpact.cta.secondaryButton}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
