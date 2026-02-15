"use client"

import { Button } from "@/components/button";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { GlassCard } from "@/components/glass-card";
import { motion } from "framer-motion";

// Icons to represent AI Strategy concepts
import ExtensionIcon from '@mui/icons-material/Extension'; // Represents strategic thinking, innovation
import RuleFolderIcon from '@mui/icons-material/RuleFolder'; // Represents governance, compliance
import AnalyticsIcon from '@mui/icons-material/Analytics'; // Represents data and insights
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'; // Represents implementation and roadmap

export default function AiStrategyPage() {
  return (
    <div className="py-24 md:py-32">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-fintricity-navy text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="cyan" className="mb-6 px-4 py-1 uppercase tracking-widest bg-fintricity-cyan/10 border-fintricity-cyan/20 text-fintricity-cyan">
              Strategic AI Integration
            </Badge>
            <h1 className="text-h1-mobile md:text-h1 text-white mb-8 max-w-3xl mx-auto">
              Chart Your Course with a Fintricity AI Strategy & Roadmap
            </h1>
            <p className="mb-12 max-w-2xl mx-auto text-fintricity-light-gray font-medium text-body-primary">
              Transform your enterprise by embedding AI at the core of your strategy, ensuring every initiative drives tangible business outcomes and future-proofs your operations.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
                <Link href="/contact">Book a Strategy Session</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-10 border-white text-white hover:bg-white/10" asChild>
                <Link href="/solutions">Explore All Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Executive-Focused Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-center mb-16">The Executive Imperative: An AI-First Strategy</h2>
          <div className="space-y-8 text-fintricity-charcoal text-lg leading-relaxed">
            <p>
              In today's rapidly evolving landscape, adopting an "AI-First" mindset is no longer optional—it's essential for competitive survival and growth. Fintricity partners with senior executives to develop a clear, actionable AI strategy and roadmap. Our approach moves beyond treating AI as a mere tool; we integrate it into the fundamental fabric of your business, transforming core operations, decision-making, and customer engagement to unlock unprecedented value.
            </p>
            <p>
              We guide you in charting a course where AI is central to innovation, enabling new business models and driving significant improvements in efficiency, risk management, and overall strategic advantage. This is not just about adopting technology; it's about reimagining your enterprise with AI at its core.
            </p>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-24 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Pillars of Your AI Strategy & Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><ExtensionIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Strategic Alignment & Outcome Focus</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                We ensure your AI initiatives are tightly coupled with your overarching business goals. Our roadmap prioritizes AI applications that yield measurable outcomes, whether it's accelerating revenue growth, optimizing operational efficiency, mitigating risks, or enhancing customer experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><RuleFolderIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Data Foundation & Governance</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                A robust data strategy is the bedrock of successful AI implementation. We help you establish systems for data collection, quality, governance, and accessibility, ensuring your AI models are powered by reliable, secure, and ethically managed data.
              </p>
            </motion.div>

            <motion.div 
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><SettingsSuggestIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Phased Implementation & Agile Delivery</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Our roadmap breaks down complex AI transformations into manageable stages. We employ agile methodologies to ensure rapid value delivery, iterative development, continuous feedback, and the flexibility to adapt to evolving business needs and technological advancements.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><AnalyticsIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Innovation & Enterprise Adoption</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                We foster a culture of innovation, encouraging the exploration of AI's potential across all functions—from marketing and operations to IT and HR. Our strategy ensures widespread adoption and integration of AI for sustained competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Phases Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Roadmap to AI Maturity</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="p-8 rounded-xl bg-fintricity-light-gray/50 border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 text-fintricity-teal font-bold text-xs uppercase tracking-widest">Phase 1: 0-12 Months</div>
              <h3 className="mb-3 text-fintricity-navy">Explore & Pilot</h3>
              <p className="text-fintricity-charcoal text-body-primary text-sm">Test hypotheses, demonstrate value, establish foundational data infrastructure, and initial AI literacy.</p>
            </motion.div>
            <motion.div 
              className="p-8 rounded-xl bg-fintricity-light-gray/50 border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="mb-4 text-fintricity-teal font-bold text-xs uppercase tracking-widest">Phase 2: 12-24 Months</div>
              <h3 className="mb-3 text-fintricity-navy">Scale & Integrate</h3>
              <p className="text-fintricity-charcoal text-body-primary text-sm">Scale successful pilots, integrate AI into core processes, expand talent, and refine governance.</p>
            </motion.div>
            <motion.div 
              className="p-8 rounded-xl bg-fintricity-light-gray/50 border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="mb-4 text-fintricity-teal font-bold text-xs uppercase tracking-widest">Phase 3: 24+ Months</div>
              <h3 className="mb-3 text-fintricity-navy">Transform & Innovate</h3>
              <p className="text-fintricity-charcoal text-body-primary text-sm">Pursue transformative AI initiatives, redefine business models, and embed AI as a core competency.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Monitoring & Governance Section */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-white mb-8">Ensuring Governance, Ethics, and Continuous Improvement</h2>
          <p className="text-fintricity-light-gray text-body-primary mb-10 max-w-2xl mx-auto">
            We establish comprehensive governance, ethical AI principles, and robust monitoring to ensure compliance, mitigate risks, and drive continuous improvement. Your AI strategy will be built on a foundation of responsibility and measurable impact.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Define Your AI Future</h2>
          <p className="text-fintricity-charcoal text-body-primary mb-10 max-w-2xl mx-auto">
            Partner with Fintricity to develop a bespoke AI strategy and roadmap that aligns with your executive vision and drives transformative business outcomes.
          </p>
          <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
            <Link href="/contact">Schedule Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}