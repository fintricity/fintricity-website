"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"

export function PricingClient({ content }: { content: any }) {
  return (
    <>
      {/* Hero Section */}
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
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Flaw & Model Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.flaw.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.flaw.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-kendra-blue p-8 rounded-2xl shadow-lg text-white"
            >
              <h2 className="text-3xl font-bold mb-6">{content.model.title}</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                {content.model.description}
              </p>
              <div className="space-y-4">
                {content.model.points.map((point: any, i: number) => (
                  <div key={i} className="bg-white/10 p-4 rounded-lg">
                    <span className="block font-bold text-kendra-orange mb-1">{point.label}</span>
                    <span className="text-sm">{point.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
               className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-kendra-blue mb-6">{content.roi.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {content.roi.description}
              </p>
            </motion.div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 shadow-inner mb-12">
              <div className="text-center font-mono text-2xl md:text-4xl text-kendra-plum font-bold mb-8">
                {content.roi.formula}
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {content.roi.definitions.map((def: any, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                     <span className="font-mono font-bold text-kendra-blue bg-blue-50 px-2 py-1 rounded">{def.symbol}</span>
                     <span className="text-gray-600 text-sm">{def.meaning}</span>
                  </div>
                ))}
              </div>
            </div>

             <div className="bg-kendra-orange/5 rounded-xl p-8 border border-kendra-orange/20 text-center">
               <h3 className="text-lg font-bold text-kendra-orange mb-4 uppercase tracking-widest">Alternative ROI View</h3>
               <div className="font-mono text-xl md:text-2xl text-gray-800 font-bold">
                 {content.roi.roiFormula}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{content.cta.title}</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.cta.subtitle}
          </p>
          <Button size="lg" variant="secondary" className="font-bold">
              {content.cta.buttonText}
          </Button>
        </div>
      </section>
    </>
  )
}
