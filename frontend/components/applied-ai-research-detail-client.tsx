"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

export function AppliedAIResearchDetailClient({ content }: { content: any }) {
  if (!content) return <div>Applied AI Research content not found</div>;

  return (
    <>
      {/* Hero Section */}
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
            {content.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-fintricity-light-gray mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
              <Link href="/contact">{content.hero.cta}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">{content.overview.title}</h2>
            <div 
              className="text-fintricity-charcoal text-body-primary space-y-6"
              dangerouslySetInnerHTML={{ __html: content.overview.commentary }}
            />
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {content.overview.keyDifferentiators.map((diff: string, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-fintricity-light-gray/50 border border-gray-100"
                >
                  <span className="text-fintricity-teal text-2xl font-bold">✓</span>
                  <p className="text-fintricity-charcoal text-body-primary mb-0">{diff}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center">Research Focus Areas</h2>
          <div className="space-y-16">
            {content.researchFocusAreas.map((area: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="mb-4 text-fintricity-navy">{area.title}</h3>
                  <div 
                    className="text-fintricity-charcoal text-body-primary space-y-4"
                    dangerouslySetInnerHTML={{ __html: area.commentary }}
                  />
                  <ul className="list-disc list-inside text-fintricity-charcoal text-body-primary space-y-2 mt-6">
                    {area.bulletPoints.map((point: string, j: number) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  <p className="text-fintricity-charcoal text-body-primary mt-6">
                    **Example Application:** {area.exampleApplication}
                  </p>
                  <p className="font-bold text-sm uppercase tracking-widest text-fintricity-teal mt-4">
                    Industry Focus: {area.industryFocus}
                  </p>
                  <p className="font-bold text-sm uppercase tracking-widest text-fintricity-teal">
                    Key Benefit: {area.keyBenefit}
                  </p>
                  <Button size="lg" variant="cyan" asChild className="mt-8">
                    <Link href={area.ctaLink}>{area.ctaText}</Link>
                  </Button>
                </div>
                <div>
                  {/* Placeholder for abstract visualization */}
                  <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                    Abstract Visualization for {area.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center">Research Methodology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.researchMethodology.phases.map((phase: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-xl bg-fintricity-light-gray/50 border border-gray-100 shadow-sm"
              >
                <div className="text-fintricity-teal text-xl font-bold mb-4">Phase {i + 1}</div>
                <h3 className="mb-3 text-fintricity-navy">{phase.title}</h3>
                <p className="text-fintricity-charcoal text-body-primary text-sm mb-4">{phase.desc}</p>
                <p className="text-fintricity-charcoal text-body-primary text-xs italic">{phase.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partnerships & Collaborations */}
      <section className="py-32 bg-fintricity-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-white mb-12 text-center">Research Partnerships & Collaborations</h2>
          <div 
            className="text-fintricity-light-gray text-body-primary space-y-4 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: content.researchPartnerships.commentary }}
          />
          <ul className="list-disc list-inside text-fintricity-light-gray text-body-primary space-y-2 mt-6 max-w-3xl mx-auto">
            {content.researchPartnerships.bulletPoints.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center">Success Metrics for Applied AI Research</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {content.successMetrics.categories.map((category: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-fintricity-light-gray/50 border border-gray-100 shadow-sm"
              >
                <h3 className="mb-6 text-fintricity-navy">{category.title}</h3>
                <ul className="list-disc list-inside text-fintricity-charcoal text-body-primary space-y-2">
                  {category.metrics.map((metric: string, j: number) => (
                    <li key={j}>{metric}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies: Applied AI Research Impact */}
      <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center">Case Studies: Applied AI Research Impact</h2>
          <div className="space-y-16">
            {content.researchCaseStudies.map((cs: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Badge variant="teal" className="mb-4 px-3 py-1 uppercase tracking-widest">{cs.industry}</Badge>
                  <h3 className="mb-4 text-fintricity-navy">{cs.title}</h3>
                  <p className="text-fintricity-charcoal text-body-primary mb-6">
                    **Challenge:** {cs.challenge}
                  </p>
                  <p className="text-fintricity-charcoal text-body-primary mb-6">
                    **Research Innovation:** {cs.researchInnovation}
                  </p>
                  <p className="text-fintricity-charcoal text-body-primary mb-6">
                    **Result:** {cs.result}
                  </p>
                  <p className="font-bold text-fintricity-teal text-sm uppercase tracking-widest mt-4">
                    {cs.competitiveEdge}
                  </p>
                </div>
                <div>
                  {/* Placeholder for case study visualization */}
                  <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                    Case Study Visualization {i+1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Engagement Model */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center">Pricing & Engagement Model</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.pricingEngagementModel.types.map((type: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-fintricity-light-gray/50 border border-gray-100 shadow-sm text-center"
              >
                <h3 className="mb-4 text-fintricity-navy">{type.title}</h3>
                <p className="text-fintricity-charcoal text-body-primary mb-6">{type.description}</p>
                <ul className="list-disc list-inside text-left mx-auto text-fintricity-charcoal text-body-primary space-y-1">
                  {type.details.map((detail: string, j: number) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
                <Button size="lg" variant="cyan" asChild className="mt-8">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
