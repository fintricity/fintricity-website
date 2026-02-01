"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"

// Material-UI Icons needed for IndustryClient
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FactoryIcon from '@mui/icons-material/Factory';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';
import ExtensionIcon from '@mui/icons-material/Extension';
import ShieldIcon from '@mui/icons-material/Shield';

const solutionIconMap: { [key: string]: any } = {
  "AI-Powered Fraud Detection & Prevention": AccountBalanceIcon,
  "Intelligent Customer Service & Analytics": BusinessCenterIcon,
  "RegTech & Compliance Automation": CheckCircleOutlineIcon,
  "Trade & Risk Intelligence": BarChartIcon,
  "Wealth Management Personalization": LocalHospitalIcon,
  "Data Governance & Architecture Modernization": BuildIcon,
  "Intelligent Underwriting Platforms": BusinessCenterIcon,
  "AI-Driven Claims Processing": CheckCircleOutlineIcon,
  "Predictive Risk Modeling": BarChartIcon,
  "Customer Experience & Retention": BusinessCenterIcon,
  "Fraud Detection & Prevention": ShieldIcon,
  "EMR Integration & Interoperability": LocalHospitalIcon,
  "Clinical Decision Support": LocalHospitalIcon,
  "Predictive Analytics & Outcomes": BarChartIcon,
  "Patient Engagement Platforms": LocalHospitalIcon,
  "Administrative Automation": BuildIcon,
  "Demand Forecasting & Planning": BarChartIcon,
  "Predictive Maintenance & IoT": FactoryIcon,
  "Supply Chain Optimization": FactoryIcon,
  "Manufacturing Operations": FactoryIcon,
  "Agentic Automation & Orchestration": ExtensionIcon,
};


export function IndustryClient({ content }: { content: any }) {
  if (!content) return <div>Industry content not found</div>;

  const getIcon = (solutionTitle: string) => {
    const IconComponent = solutionIconMap[solutionTitle];
    if (IconComponent) {
      return <IconComponent />;
    }
    // Default or fallback icon
    return <CheckCircleOutlineIcon />; 
  };


  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-fintricity-navy text-white bg-mesh-gradient animate-gradient-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="cyan" className="mb-6 px-4 py-1 uppercase tracking-widest bg-fintricity-cyan/10 border-fintricity-cyan/20 text-fintricity-cyan">
              {content.hero.badge}
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
            className="mb-12 max-w-2xl mx-auto text-fintricity-light-gray font-medium text-body-primary"
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
              <Link href="/contact">{content.hero.cta}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      {content.challenge && (
        <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">{content.challenge.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {content.challenge.points.map((point: string, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/80 border border-gray-100 shadow-sm"
                >
                  <CheckCircleOutlineIcon className="text-fintricity-teal flex-shrink-0 mt-1" />
                  <p className="text-fintricity-charcoal text-body-primary mb-0">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solutions Hub Section */}
      {content.solutionsHub && (
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">Solutions Hub</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.solutionsHub.map((solution: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="h-full border-0 shadow-xl bg-fintricity-light-gray/30">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-fintricity-teal bg-fintricity-teal/10 text-3xl mb-6">
                      {getIcon(solution.title)}
                    </div>
                    <h3 className="mb-3">{solution.title}</h3>
                    <p className="text-fintricity-charcoal text-body-primary mb-4">
                      **Benefits:** {solution.benefits}
                    </p>
                    {solution.useCases && (
                      <p className="text-fintricity-charcoal text-body-primary mb-4">
                        **Use Cases:** {solution.useCases}
                      </p>
                    )}
                    {solution.regulatoryFocus && (
                      <p className="text-fintricity-charcoal text-body-primary mb-6">
                        **Regulatory Focus:** {solution.regulatoryFocus}
                      </p>
                    )}
                    {solution.businessImpact && (
                      <p className="text-fintricity-charcoal text-body-primary mb-6">
                        **Business Impact:** {solution.businessImpact}
                      </p>
                    )}
                    <Button variant="outline" size="lg" asChild className="mt-auto">
                      <Link href="/contact">{solution.cta}</Link>
                    </Button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Success Metrics Section */}
      {content.successMetrics && content.successMetrics.length > 0 && (
        <section className="py-32 bg-fintricity-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white mb-16">Measured Success</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {content.successMetrics.map((metric: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-bold text-fintricity-cyan mb-2">{metric.value}</div>
                  <div className="text-xs font-bold text-fintricity-light-gray uppercase tracking-widest">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Case Studies Section */}
      {content.featuredCaseStudies && content.featuredCaseStudies.length > 0 && (
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-16">Featured Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.featuredCaseStudies.map((cs: string, i: number) => (
                <GlassCard key={i} className="border-0 shadow-sm bg-fintricity-light-gray/30">
                  <h3 className="mb-3">{cs}</h3>
                  <Link href="/case-studies" className="text-fintricity-teal font-bold text-sm tracking-wide hover:text-fintricity-cyan transition-colors">
                    Read Case Study →
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compliance & Security Section */}
      {content.complianceAndSecurity && (
        <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">{content.complianceAndSecurity.title}</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {content.complianceAndSecurity.points.map((point: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircleOutlineIcon className="text-fintricity-teal flex-shrink-0 mt-1" />
                  <p className="text-fintricity-charcoal text-body-primary mb-0">{point}</p>
                </div>
              ))}
            </div>
            {content.complianceAndSecurity.downloadCta && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    <DownloadIcon className="mr-2" /> {content.complianceAndSecurity.downloadCta}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Regulatory Framework Section */}
      {content.regulatoryFramework && (
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">{content.regulatoryFramework.title}</h2>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-fintricity-navy mb-6">Key Compliance Areas:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {content.regulatoryFramework.keyComplianceAreas.map((area: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-fintricity-light-gray/50 border border-gray-100 shadow-sm">
                    <CheckCircleOutlineIcon className="text-fintricity-cyan flex-shrink-0 mt-1" />
                    <p className="text-fintricity-charcoal text-body-primary mb-0">{area}</p>
                  </div>
                ))}
              </div>
              {content.regulatoryFramework.downloadCta && (
                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                      <DownloadIcon className="mr-2" /> {content.regulatoryFramework.downloadCta}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Implementation Approach Section */}
      {content.implementationApproach && (
        <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">Implementation Approach</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {content.implementationApproach.phases.map((phase: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-6 rounded-xl bg-white/80 border border-gray-100 shadow-sm"
                >
                  <div className="mb-4 text-fintricity-teal font-bold text-xs uppercase tracking-widest">
                    Phase {i + 1}: {phase.duration}
                  </div>
                  <h3 className="mb-3">{phase.title}</h3>
                  <p className="text-fintricity-charcoal text-body-primary text-sm">{phase.desc}</p>
                  {i < content.implementationApproach.phases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-12 text-gray-300 text-5xl transform -translate-y-1/2">→</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      {content.callToAction && (
        <section className="py-24 bg-fintricity-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white mb-6">{content.callToAction.title}</h2>
            <p className="text-fintricity-light-gray text-body-primary mb-10 max-w-2xl mx-auto">
              {content.callToAction.subtitle}
            </p>
            <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
              <Link href="/contact">{content.callToAction.ctaText}</Link>
            </Button>
          </div>
        </section>
      )}
    </>
  )
}