"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"

// Importing Material-UI Icons needed for new homepage sections.
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExtensionIcon from '@mui/icons-material/Extension';
import ShieldIcon from '@mui/icons-material/Shield';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FactoryIcon from '@mui/icons-material/Factory';
import ScienceIcon from '@mui/icons-material/Science';

function AccordionItem({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-left group"
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

const iconMap: { [key: string]: any } = {
  "💡": LightbulbIcon,
  "🔗": BuildIcon,
  "⚙️": CodeIcon,
  "📊": BarChartIcon,
  "🔬": ScienceIcon,
  "🤖": ExtensionIcon,
  "🛡️": ShieldIcon,
  "🏦": AccountBalanceIcon,
  "🏥": BusinessCenterIcon,
  "🩺": LocalHospitalIcon,
  "🏭": FactoryIcon,
};

// Custom hook for interval
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// HeroBanner component for rotating content
function HeroBanner({ banners }: { banners: any[] }) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Rotate banner every 8 seconds
  useInterval(() => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, 8000); // 8 seconds rotation interval

  const currentBanner = banners[currentBannerIndex];

  if (!currentBanner) return null;

  return (
    <section 
      className="relative py-24 md:py-40 overflow-hidden bg-fintricity-navy text-white bg-mesh-gradient animate-gradient-background" 
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBannerIndex} // Key changes to trigger re-animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {currentBanner.badge && (
                <Badge variant="cyan" className="mb-8 px-4 py-1 text-xs uppercase tracking-widest bg-fintricity-cyan/10 border-fintricity-cyan/30 text-fintricity-cyan">
                  {currentBanner.badge}
                </Badge>
              )}
              <h1 className="text-h1-mobile md:text-h1 text-white">
                {currentBanner.title}
              </h1>
              {currentBanner.subtitle && (
                <p className="mb-12 max-w-2xl mx-auto text-fintricity-light-gray font-medium text-body-primary">
                  {currentBanner.subtitle}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {currentBanner.primaryCTA && (
                  <Button size="lg" variant="cyan" className="group px-10 shadow-xl shadow-fintricity-cyan/20" asChild>
                    <Link href="/contact">
                      {currentBanner.primaryCTA} <span className="ml-2 transition-transform group-hover:translate-x-1">&#8594;</span>
                    </Link>
                  </Button>
                )}
                {currentBanner.secondaryCTA && (
                  <Button size="lg" variant="outline" className="px-10 border-white text-white hover:bg-white/10" asChild>
                    <Link href="/case-studies">{currentBanner.secondaryCTA}</Link>
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


export function HomeClient({ content }: { content: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section - now a rotating banner */}
      {content.heroBanners && content.heroBanners.length > 0 && (
        <HeroBanner banners={content.heroBanners} />
      )}
      
      {/* The Problem Section (Impact Section) */}
      <section className="py-32 bg-fintricity-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              className="text-white mb-12"
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
                  <p className="text-gray-300 font-medium text-body-primary mb-0">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-20">{content.theSolution?.title}</h2>
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
                  <h3 className="mb-4">{pillar.title}</h3>
                  <p className="text-fintricity-charcoal text-body-primary">{pillar.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="mb-6">{content.capabilities?.title}</h2>
            <p className="max-w-2xl mx-auto text-fintricity-charcoal text-body-primary leading-relaxed">
              {content.capabilities?.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.capabilities?.cards?.map((card: any, i: number) => {
              const IconComponent = iconMap[card.icon];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="h-full border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-fintricity-cyan bg-fintricity-cyan/10 text-3xl mb-6">
                      {IconComponent && <IconComponent fontSize="inherit" />}
                      {!IconComponent && card.icon}
                    </div>
                    <h3 className="mb-4">{card.title}</h3>
                    <p className="text-fintricity-charcoal text-body-primary mb-6">{card.desc}</p>
                    <Link href={card.href} className="text-fintricity-teal font-bold text-sm tracking-wide hover:text-fintricity-cyan transition-colors flex items-center group">
                      LEARN MORE <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="mb-6">{content.industriesWeServe?.title}</h2>
            <p className="max-w-2xl mx-auto text-fintricity-charcoal text-body-primary leading-relaxed">
              {content.industriesWeServe?.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.industriesWeServe?.cards?.map((card: any, i: number) => {
              const IconComponent = iconMap[card.icon];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="h-full border-0 shadow-sm bg-fintricity-light-gray/30 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-fintricity-teal bg-fintricity-teal/10 text-3xl mb-6">
                      {IconComponent && <IconComponent fontSize="inherit" />}
                      {!IconComponent && card.icon}
                    </div>
                    <h3 className="mb-4">{card.title}</h3>
                    <p className="text-fintricity-charcoal text-body-primary mb-6">{card.desc}</p>
                    <Link href={card.href} className="text-fintricity-teal font-bold text-sm tracking-wide hover:text-fintricity-cyan transition-colors flex items-center group">
                      EXPLORE <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="mb-6">{content.howWeWork?.title}</h2>
            <p className="max-w-2xl mx-auto text-fintricity-charcoal text-body-primary leading-relaxed">
              {content.howWeWork?.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {content.howWeWork?.phases?.map((phase: any, i: number) => (
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
                {i < content.howWeWork.phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-12 text-gray-300 text-5xl transform -translate-y-1/2">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points / Metrics Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-20">{content.proofPoints?.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {content.proofPoints?.metrics?.map((metric: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-fintricity-navy mb-2">{metric.value}</div>
                <div className="text-xs font-bold text-fintricity-teal uppercase tracking-widest">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="py-32 bg-fintricity-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">{content.featuredCaseStudy?.title}</h2>
            <p className="text-fintricity-light-gray text-body-primary mb-10">
              {content.featuredCaseStudy?.subtitle}
            </p>
            <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
              <Link href={content.featuredCaseStudy?.href}>{content.featuredCaseStudy?.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights & Thought Leadership Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="mb-6">{content.insightsAndThoughtLeadership?.title}</h2>
            <p className="max-w-2xl mx-auto text-fintricity-charcoal text-body-primary leading-relaxed">
              {content.insightsAndThoughtLeadership?.subtitle}
            </p>
          </div>
          {/* Placeholder for actual insights cards - would dynamically load blogPosts from insights.json */}
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="border-0 shadow-sm bg-fintricity-light-gray/30">
              <h3 className="mb-3">Latest Article</h3>
              <p className="text-fintricity-charcoal text-sm mb-4">
                Why Agentic AI is the Future for Enterprise.
              </p>
              <Link href="/insights" className="text-fintricity-teal font-bold text-sm tracking-wide hover:text-fintricity-cyan transition-colors">
                Read More →
              </Link>
            </GlassCard>
            <GlassCard className="border-0 shadow-sm bg-fintricity-light-gray/30">
              <h3 className="mb-3">New Research Report</h3>
              <p className="text-fintricity-charcoal text-sm mb-4">
                The Architectures of Autonomy: A Deep Dive.
              </p>
              <Link href="/insights" className="text-fintricity-teal font-bold text-sm tracking-wide hover:text-fintricity-cyan transition-colors">
                Download Report →
              </Link>
            </GlassCard>
            <GlassCard className="border-0 shadow-sm bg-fintricity-light-gray/30">
              <h3 className="mb-3">Expert Webinar</h3>
              <p className="text-fintricity-charcoal text-sm mb-4">
                Navigating Compliance in the AI Era.
              </p>
              <Link href="/insights" className="text-fintricity-teal font-bold text-sm tracking-wide hover:text-fintricity-cyan transition-colors">
                Watch Now →
              </Link>
            </GlassCard>
          </div>
          <div className="text-center mt-20">
            <Button size="lg" variant="outline" asChild>
              <Link href={content.insightsAndThoughtLeadership?.href}>
                {content.insightsAndThoughtLeadership?.cta}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team & Culture Section */}
      <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">{content.teamAndCulture?.title}</h2>
          <p className="max-w-2xl mx-auto text-fintricity-charcoal text-body-primary leading-relaxed mb-10">
            {content.teamAndCulture?.subtitle}
          </p>
          <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
            <Link href={content.teamAndCulture?.href}>{content.teamAndCulture?.cta}</Link>
          </Button>
        </div>
      </section>

      {/* Final Call to Action Section */}
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

            <h2 className="text-white mb-8 relative z-10 max-w-3xl mx-auto">{content.finalCTA?.title}</h2>
            <p className="text-fintricity-light-gray/70 mb-12 max-w-xl mx-auto relative z-10 text-body-primary">
              {content.finalCTA?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Button size="lg" variant="cyan" className="px-12 py-7 text-lg" asChild>
                <Link href="/contact">{content.finalCTA?.primaryButton}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-12 py-7 text-lg" asChild>
                <Link href="/solutions">{content.finalCTA?.secondaryButton}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
