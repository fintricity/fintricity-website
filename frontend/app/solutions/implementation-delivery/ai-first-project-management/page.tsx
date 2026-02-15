"use client"

import { Button } from "@/components/button";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { GlassCard } from "@/components/glass-card";
import { motion } from "framer-motion";

// Icons relevant to project management and AI
import InsightsIcon from '@mui/icons-material/Insights'; // Represents data-driven decisions
import GroupWorkIcon from '@mui/icons-material/GroupWork'; // Represents collaboration/agile teams
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Represents delivery/launch
import SecurityIcon from '@mui/icons-material/Security'; // Represents governance/risk

export default function AiFirstProjectManagementPage() {
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
              Optimized Delivery
            </Badge>
            <h1 className="text-h1-mobile md:text-h1 text-white mb-8 max-w-3xl mx-auto">
              AI-First Project Management & Agile Delivery
            </h1>
            <p className="mb-12 max-w-2xl mx-auto text-fintricity-light-gray font-medium text-body-primary">
              Revolutionize your project delivery with AI-driven insights, predictive analytics, and autonomous workflows, ensuring efficiency, reduced risk, and superior outcomes.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
                <Link href="/contact">Accelerate Your Projects</Link>
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
          <h2 className="text-center mb-16">The Future of Project Delivery: Intelligent & Agile</h2>
          <div className="space-y-8 text-fintricity-charcoal text-lg leading-relaxed">
            <p>
              In an era defined by rapid technological shifts, traditional project management methodologies often struggle to keep pace with the complexities and demands of AI initiatives. Fintricity introduces an AI-First approach to project management and agile delivery, integrating advanced AI capabilities directly into every phase of your project lifecycle. This paradigm shift ensures that decision-making is data-driven, risks are predicted and mitigated proactively, and resources are optimized for maximum efficiency.
            </p>
            <p>
              We empower organizations to move beyond reactive management, fostering a culture of predictive insight and continuous optimization. Our methodology is designed for the modern enterprise, where agility, intelligence, and adaptability are paramount for successful innovation and sustained competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-24 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Pillars of AI-First Project Management</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><InsightsIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Predictive Analytics & Risk Mitigation</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Utilize AI to foresee potential roadblocks, predict project timelines with greater accuracy, and proactively address risks before they impact delivery.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><GroupWorkIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Intelligent Resource Optimization</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                AI algorithms dynamically allocate resources, optimize team assignments, and manage workloads to maximize productivity and project velocity.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><RocketLaunchIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Automated Workflow & Quality Assurance</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Automate routine tasks, streamline development pipelines, and enhance code quality with AI-driven testing and continuous integration.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><SecurityIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Enhanced Governance & Compliance</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Maintain strict oversight with AI-powered monitoring, ensuring projects adhere to regulatory standards and internal governance policies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-center mb-16">Transforming Project Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <GlassCard className="p-6">
              <h3 className="text-fintricity-navy mb-3">Up to 40% Faster Delivery</h3>
              <p className="text-fintricity-charcoal text-body-primary text-sm">Streamlined workflows and predictive insights accelerate project completion times.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-fintricity-navy mb-3">25% Reduction in Project Costs</h3>
              <p className="text-fintricity-charcoal text-body-primary text-sm">Optimized resource allocation and risk mitigation minimize unexpected expenses.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-fintricity-navy mb-3">Improved Quality & Innovation</h3>
              <p className="text-fintricity-charcoal text-body-primary text-sm">AI-driven insights and automation enhance product quality and foster novel solutions.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Project Delivery?</h2>
          <p className="text-fintricity-light-gray text-body-primary mb-10 max-w-2xl mx-auto">
            Partner with Fintricity to implement AI-First Project Management strategies that drive efficiency, reduce costs, and accelerate innovation.
          </p>
          <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}