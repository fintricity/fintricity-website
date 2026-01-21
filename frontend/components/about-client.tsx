"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card" // Assuming GlassCard is a reusable client component

export function AboutClient({ content }: { content: any }) {
  return (
    <>
      {/* Mission Hero */}
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
            Engineering the Future <br className="hidden md:block" /> of <span className="text-kendra-plum">Human-AI Collaboration</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {content.philosophy.map((item: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              >
                <div className={`h-16 w-16 rounded-xl flex items-center justify-center text-3xl 
                  ${i === 0 ? 'bg-kendra-plum/10 text-kendra-plum' : 'bg-kendra-orange/10 text-kendra-orange'}`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-kendra-blue">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do Business */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-kendra-blue mb-6 tracking-tight">{content.businessPhilosophy.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.businessPhilosophy.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.businessPhilosophy.values.map((value: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-xl bg-gray-50 border border-gray-200 hover:border-kendra-plum/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-kendra-blue mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Focus Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-kendra-blue mb-6 tracking-tight">{content.commercialSection.title}</h2>
            </motion.div>
            <div className="space-y-6">
              {content.commercialSection.paragraphs.map((p: string, i: number) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-lg text-gray-700 leading-relaxed text-center"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Focus Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
             <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-kendra-blue mb-6 tracking-tight">{content.technicalSection.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 whitespace-pre-line">
                 {content.technicalSection.intro}
              </p>
               <h3 className="text-xl font-semibold text-kendra-plum">{content.technicalSection.listIntro}</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {content.technicalSection.features.map((feature: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-kendra-blue/20 transition-all shadow-sm"
                >
                   <h4 className="text-xl font-bold text-kendra-blue mb-3">{feature.title}</h4>
                   <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
               className="bg-kendra-blue/5 rounded-2xl p-8 border border-kendra-blue/10 text-center"
            >
              <p className="text-lg text-gray-800 leading-relaxed">
                {content.technicalSection.outro}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Team/Story Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="lg:w-1/2"
              >
                  <h2 className="text-4xl font-bold text-kendra-blue mb-6 tracking-tight">{content.story.title}</h2>
                  {content.story.paragraphs.map((p: string, i: number) => (
                    <p key={i} className="text-lg text-gray-700 mb-6">{p}</p>
                  ))}
                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                    {content.story.stats.map((stat: any, i: number) => (
                      <div key={i} className="text-center">
                          <div className="text-3xl font-bold text-kendra-plum mb-2">{stat.value}</div>
                          <div className="text-xs uppercase tracking-widest font-bold text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="lg:w-1/2 relative bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 flex items-center justify-center"
              >
                  <div className="text-[100px] text-gray-300">👥</div> {/* Placeholder icon */}
              </motion.div>
          </div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-kendra-blue mb-6">{content.careersCta.title}</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.careersCta.subtitle}
          </p>
          <Button size="lg" variant="plum">
              {content.careersCta.buttonText} <span className="ml-2 text-lg">🚀</span>
          </Button>
        </div>
      </section>
    </>
  )
}
