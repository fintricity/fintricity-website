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

// Custom hook for interval
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(undefined);

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
      className="relative py-24 md:py-40 overflow-hidden bg-fintricity-navy text-white" 
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                {currentBanner.title}
              </h1>
              {currentBanner.subtitle && (
                <p className="mb-12 max-w-2xl mx-auto text-gray-300 font-medium text-lg md:text-xl">
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
  return (
    <>
      <HeroBanner banners={content.heroBanners} />

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-fintricity-navy mb-12 text-center">
              {content.theProblem.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.theProblem.points.map((point: string, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-fintricity-light-gray/50 border border-gray-100"
                >
                  <div className="w-6 h-6 rounded-full bg-fintricity-navy text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                    !
                  </div>
                  <p className="text-fintricity-charcoal font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-fintricity-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fintricity-cyan to-fintricity-teal"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {content.theSolution.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {content.theSolution.pillars.map((pillar: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8 border border-white/20">
                  {i === 0 && <LightbulbIcon className="text-fintricity-cyan text-4xl" />}
                  {i === 1 && <BuildIcon className="text-fintricity-cyan text-4xl" />}
                  {i === 2 && <BarChartIcon className="text-fintricity-cyan text-4xl" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-fintricity-light-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fintricity-navy mb-6">
              {content.capabilities.title}
            </h2>
            <p className="text-fintricity-charcoal text-lg max-w-2xl mx-auto">
              {content.capabilities.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.capabilities.cards.map((card: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="h-full p-8 bg-white border-0 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="text-4xl mb-6">{card.icon}</div>
                  <h3 className="text-xl font-bold text-fintricity-navy mb-4 group-hover:text-fintricity-teal transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-fintricity-charcoal text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  <Link 
                    href={card.href} 
                    className="text-fintricity-teal font-bold text-xs uppercase tracking-widest hover:text-fintricity-navy transition-colors flex items-center"
                  >
                    Explore <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fintricity-navy mb-6">
              {content.industriesWeServe.title}
            </h2>
            <p className="text-fintricity-charcoal text-lg max-w-2xl mx-auto">
              {content.industriesWeServe.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.industriesWeServe.cards.map((card: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-fintricity-navy flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-fintricity-navy to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-fintricity-light-gray/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fintricity-navy mb-6">
              {content.howWeWork.title}
            </h2>
            <p className="text-fintricity-charcoal text-lg max-w-2xl mx-auto">
              {content.howWeWork.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {content.howWeWork.phases.map((phase: any, i: number) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-gray-200 z-0 -translate-x-10"></div>
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-fintricity-cyan flex items-center justify-center text-fintricity-navy font-bold text-xl mb-8 mx-auto md:mx-0">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-fintricity-navy mb-2">{phase.title}</h3>
                  <div className="text-fintricity-teal font-bold text-sm uppercase tracking-widest mb-4">{phase.duration}</div>
                  <p className="text-fintricity-charcoal text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {content.proofPoints.metrics.map((metric: any, i: number) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-fintricity-cyan mb-4">{metric.value}</div>
                <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-fintricity-light-gray rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <Badge variant="outline" className="mb-8 w-fit border-fintricity-teal text-fintricity-teal">Featured Case Study</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-fintricity-navy mb-8">
                {content.featuredCaseStudy.title}
              </h2>
              <p className="text-lg text-fintricity-charcoal mb-12 leading-relaxed">
                {content.featuredCaseStudy.subtitle}
              </p>
              <Button size="lg" variant="default" className="w-fit" asChild>
                <Link href={content.featuredCaseStudy.href}>
                  {content.featuredCaseStudy.cta}
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2 bg-fintricity-navy/10 relative min-h-[400px]">
              {/* Placeholder for case study image */}
              <div className="absolute inset-0 flex items-center justify-center text-fintricity-navy/20 font-bold text-2xl">
                [Case Study Visualization]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-fintricity-cyan text-fintricity-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            {content.finalCTA.title}
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto opacity-80">
            {content.finalCTA.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="default" className="px-12 py-8 text-xl" asChild>
              <Link href="/contact">{content.finalCTA.primaryButton}</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-12 py-8 text-xl border-fintricity-navy text-fintricity-navy hover:bg-fintricity-navy hover:text-white" asChild>
              <Link href="/solutions">{content.finalCTA.secondaryButton}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
