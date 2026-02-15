"use client"

import { Button } from "@/components/button";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { GlassCard } from "@/components/glass-card";
import { motion } from "framer-motion";

// Icons relevant to platform integration and enterprise systems
import SyncIcon from '@mui/icons-material/Sync'; // For seamless integration
import StorageIcon from '@mui/icons-material/Storage'; // For data infrastructure
import DnsIcon from '@mui/icons-material/Dns'; // For enterprise systems
import HubIcon from '@mui/icons-material/Hub'; // For connectivity

export default function PlatformIntegrationPage() {
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
              Connect Your Enterprise
            </Badge>
            <h1 className="text-h1-mobile md:text-h1 text-white mb-8 max-w-3xl mx-auto">
              Seamless Platform Integration for AI-Powered Enterprises
            </h1>
            <p className="mb-12 max-w-2xl mx-auto text-fintricity-light-gray font-medium text-body-primary">
              Fintricity ensures your AI solutions integrate flawlessly with your existing enterprise systems and data infrastructure, unlocking synergistic value and operational continuity.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} 
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
                <Link href="/contact">Integrate Your Systems</Link>
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
          <h2 className="text-center mb-16">Bridging AI Innovation with Enterprise Reality</h2>
          <div className="space-y-8 text-fintricity-charcoal text-lg leading-relaxed">
            <p>
              Enterprise-grade AI is only as effective as its integration into existing operational workflows and data ecosystems. Fintricity specializes in ensuring your AI solutions don't operate in isolation. We focus on seamless platform integration, connecting new AI capabilities with your critical enterprise systems—from CRMs and ERPs to data warehouses and bespoke legacy applications.
            </p>
            <p>
              Our approach guarantees that data flows effortlessly, insights are readily accessible, and AI augments rather than disrupts your current operations. We build bridges between your data infrastructure and advanced AI models, ensuring a cohesive, scalable, and value-generating technology stack. This strategic integration is key to realizing the full potential of your AI investments.
            </p>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-24 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Our Platform Integration Pillars</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><SyncIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Seamless System Connectivity</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Expertly connect AI solutions with existing enterprise software, databases, and cloud platforms to ensure unified data access and process flow.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><StorageIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Robust Data Infrastructure</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Build and integrate scalable data infrastructure that supports the demands of AI, ensuring efficient data flow from source to model.
              </p>
            </motion.div>

            <motion.div 
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><DnsIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">API & Microservices Integration</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Leverage modern API and microservices architectures for flexible, decoupled integration of AI capabilities into your enterprise ecosystem.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><HubIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Enterprise System Expertise</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Deep understanding of common enterprise systems (CRM, ERP, etc.) and custom platforms to ensure smooth, secure, and effective integration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Unlock Synergistic Value</h2>
          <p className="text-fintricity-light-gray text-body-primary mb-10 max-w-2xl mx-auto">
            Ensure your AI investments deliver maximum impact by integrating them seamlessly into your existing enterprise architecture.
          </p>
          <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
            <Link href="/contact">Connect Your Systems</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}