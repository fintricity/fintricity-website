"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/badge"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/button"

// Material-UI Icons needed for AboutClient's valueIconMap
import EngineeringIcon from '@mui/icons-material/Engineering';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ScienceIcon from '@mui/icons-material/Science';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // For IntegrityIcon
import PeopleIcon from '@mui/icons-material/People'; // For CollaborationIcon
import PsychologyIcon from '@mui/icons-material/Psychology'; // For InnovationIcon
import GavelIcon from '@mui/icons-material/Gavel'; // For IndependenceIcon
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // For BusinessFirstIcon


const valueIconMap: { [key: string]: any } = {
  "🚀": EngineeringIcon, // Representing Engineering Excellence / Strategic Impact (from initial iconMap)
  "💡": LightbulbIcon,   // Representing Strategic Impact / Innovation (from initial iconMap)
  "🛡️": SecurityIcon,    // Representing Responsible AI / Compliance (from initial iconMap)
  "🤝": HandshakeIcon,   // Representing Collaborative Partnership (from initial iconMap)
  "🔬": ScienceIcon,     // Representing Continuous Innovation / Research (from initial iconMap)
  "IntegrityIcon": AccountBalanceIcon, // Mapping to a specific MUI icon
  "CollaborationIcon": PeopleIcon,
  "InnovationIcon": PsychologyIcon,
  "IndependenceIcon": GavelIcon,
  "BusinessFirstIcon": TrendingUpIcon
};


export function AboutClient({ content }: { content: any }) {
  if (!content) return <div>About content not found</div>;

  const getValueIcon = (iconKey: string) => {
    const IconComponent = valueIconMap[iconKey];
    if (IconComponent) {
      return <IconComponent fontSize="inherit" />;
    }
    return iconKey; // Fallback to emoji if no MUI icon mapping
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
          {content.hero.cta && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <Button size="lg" variant="cyan" asChild className="shadow-xl shadow-fintricity-cyan/20">
                <Link href="/about#values">{content.hero.cta}</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Our Story Section */}
      {content.ourStory && (
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="mb-12 text-center">{content.ourStory.title}</h2>
            <div className="space-y-6 text-fintricity-charcoal text-body-primary leading-normal">
              {content.ourStory.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Mission Section */}
      {content.ourMission && (
        <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="mb-8">{content.ourMission.title}</h2>
            <p className="text-fintricity-charcoal text-xl leading-relaxed font-medium">
              {content.ourMission.description}
            </p>
          </div>
        </section>
      )}

      {/* Our Values Section */}
      {content.ourValues && (
        <section id="values" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center">{content.ourValues.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.ourValues.items.map((value: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="h-full border-0 shadow-sm bg-fintricity-light-gray/30 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-fintricity-teal bg-fintricity-teal/10 text-3xl mb-6">
                      {getValueIcon(value.icon)}
                    </div>
                    <h3 className="mb-3">{value.title}</h3>
                    <p className="text-fintricity-charcoal text-body-primary">{value.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Leadership Team Section */}
      {content.leadershipTeam && content.leadershipTeam.members && content.leadershipTeam.members.length > 0 && (
        <section className="py-32 bg-fintricity-light-gray/50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="mb-4">{content.leadershipTeam.title}</h2>
              <p className="text-fintricity-charcoal text-body-primary max-w-2xl mx-auto">
                {content.leadershipTeam.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.leadershipTeam.members.map((member: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden border-4 border-fintricity-teal shadow-lg">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-1 text-fintricity-navy">{member.name}</h3>
                  <p className="text-fintricity-teal font-medium mb-3">{member.title}</p>
                  <p className="text-fintricity-charcoal text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Call to Action Section */}
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