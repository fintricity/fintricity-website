"use client"

import { Button } from "@/components/button";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { GlassCard } from "@/components/glass-card";
import { motion } from "framer-motion";

// Icons relevant to full-stack AI engineering
import CodeIcon from '@mui/icons-material/Code'; // Represents engineering/code
import CloudQueueIcon from '@mui/icons-material/CloudQueue'; // Represents cloud infrastructure
import StorageIcon from '@mui/icons-material/Storage'; // Represents data
import BuildIcon from '@mui/icons-material/Build'; // Represents development/building

export default function FullStackAiEngineeringPage() {
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
              End-to-End AI Solutions
            </Badge>
            <h1 className="text-h1-mobile md:text-h1 text-white mb-8 max-w-3xl mx-auto">
              Full-Stack AI Engineering: From Concept to Production
            </h1>
            <p className="mb-12 max-w-2xl mx-auto text-fintricity-light-gray font-medium text-body-primary">
              Fintricity’s full-stack AI engineers build robust, scalable, and production-ready AI systems, handling every layer from data pipelines to intelligent user interfaces.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
                <Link href="/contact">Build Your AI Solution</Link>
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
          <h2 className="text-center mb-16">The Power of Integrated AI Development</h2>
          <div className="space-y-8 text-fintricity-charcoal text-lg leading-relaxed">
            <p>
              Successfully deploying AI solutions in an enterprise environment requires more than just building sophisticated models; it demands a holistic, integrated engineering approach. Fintricity’s full-stack AI engineering team covers the entire spectrum of AI development, ensuring seamless transitions from experimental prototypes to robust, production-grade systems. We manage the complexities of data engineering, model development, MLOps, and scalable deployment, all while designing intuitive interfaces for end-users.
            </p>
            <p>
              Our expertise spans across diverse technology stacks and cloud environments, enabling us to deliver tailor-made AI solutions that are performant, secure, and deeply integrated into your existing business processes. With Fintricity, you gain a single, accountable partner capable of bringing your AI vision to life, from the foundational infrastructure to the final user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-24 bg-fintricity-light-gray/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Our Full-Stack AI Engineering Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><StorageIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Data Engineering & MLOps</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Design and build scalable data pipelines, feature stores, and MLOps infrastructure for continuous integration, delivery, and monitoring of AI models.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><CodeIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Model Development & Optimization</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Develop, train, and fine-tune machine learning models, ensuring high performance, accuracy, and interpretability for your specific use cases.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><CloudQueueIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Cloud & Infrastructure Deployment</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Deploy and manage AI solutions on leading cloud platforms (AWS, Azure, GCP), optimizing for scalability, cost-efficiency, and resilience.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-white border border-fintricity-card-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-3xl text-fintricity-teal mb-4"><BuildIcon /></div>
              <h3 className="mb-3 text-fintricity-navy">Intelligent Application Development</h3>
              <p className="text-fintricity-charcoal text-body-primary">
                Build user-friendly applications that seamlessly integrate AI capabilities, delivering enhanced decision support and automated workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-fintricity-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready for End-to-End AI Innovation?</h2>
          <p className="text-fintricity-light-gray text-body-primary mb-10 max-w-2xl mx-auto">
              Let Fintricity’s full-stack AI engineering expertise transform your data, models, and applications into powerful, integrated business solutions.
          </p>
          <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
            <Link href="/contact">Start Your AI Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}