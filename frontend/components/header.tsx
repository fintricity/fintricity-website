"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/button"
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
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const menuItems = {
  solutions: [
    { title: "AI Strategy & Roadmap", href: "/solutions/ai-strategy", icon: LightbulbIcon, desc: "Define your path from opportunity to production." },
    { title: "AI Architecture", href: "/solutions/ai-architecture", icon: BuildIcon, desc: "Build a robust foundation for scalable AI systems." },
    { title: "ML Engineering", href: "/solutions/ai-engineering", icon: CodeIcon, desc: "Production-grade MLOps and model deployment." },
    { title: "Data Science", href: "/solutions/data-science", icon: BarChartIcon, desc: "Uncover insights with advanced custom models." },
    { title: "Agentic AI", href: "/solutions/agentic-ai", icon: ExtensionIcon, desc: "Multi-agent systems and autonomous workflows." },
    { title: "Compliance", href: "/solutions/ai-governance", icon: ShieldIcon, desc: "Ensure your AI is audit-ready and compliant." },
  ],
  industries: [
    { title: "Financial Services", href: "/industries/financial-services", icon: AccountBalanceIcon, desc: "Fraud detection, decision support, and RegTech." },
    { title: "Insurance", href: "/industries/insurance", icon: BusinessCenterIcon, desc: "Intelligent underwriting and predictive modeling." },
    { title: "Healthcare", href: "/industries/healthcare", icon: LocalHospitalIcon, desc: "Clinical AI and administrative automation." },
    { title: "Industrials", href: "/industries/industrials", icon: FactoryIcon, desc: "Supply chain optimization and predictive maintenance." },
  ],
  insights: [
    { title: "Articles & Blog", href: "/insights", icon: ArticleIcon, desc: "Latest thinking on Agentic AI and engineering." },
    { title: "Research Hub", href: "/applied-research", icon: DescriptionIcon, desc: "Fintricity Labs: Pushing the AI frontier." },
    { title: "Case Studies", href: "/case-studies", icon: PlayCircleIcon, desc: "Measurable outcomes across industries." },
  ]
}

function Megamenu({ items, isOpen, onClose, onMouseEnter }: { items: any[], isOpen: boolean, onClose: () => void, onMouseEnter: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50 py-16"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onClose}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-8">
              {items.map((item) => (
                <Link 
                  key={item.href + item.title} 
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-fintricity-light-gray transition-colors group"
                  onClick={onClose}
                >
		  <div className="text-3xl"><item.icon /></div>
                  <div>
                    <div className="font-bold text-fintricity-navy group-hover:text-fintricity-teal transition-colors">
                      {item.title}
                    </div>
                    {item.desc && <div className="text-sm text-fintricity-charcoal mt-1">{item.desc}</div>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  let timeoutId: any = null;

  const handleMouseEnter = (menu: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 relative">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-brand-primary tracking-tight">
            Fintricity
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm font-bold text-fintricity-charcoal hover:text-brand-primary transition-colors flex items-center gap-1">
              Solutions <span className="text-xs opacity-50">▼</span>
            </button>
          </div>

          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm font-bold text-fintricity-charcoal hover:text-brand-primary transition-colors flex items-center gap-1">
              Industries <span className="text-xs opacity-50">▼</span>
            </button>
          </div>

          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => handleMouseEnter('insights')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm font-bold text-fintricity-charcoal hover:text-brand-primary transition-colors flex items-center gap-1">
              Insights <span className="text-xs opacity-50">▼</span>
            </button>
          </div>

          <Link href="/about" className="text-sm font-bold text-fintricity-charcoal hover:text-brand-primary transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="cyan" size="sm" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <Megamenu 
          items={activeMenu ? (menuItems as any)[activeMenu] : []} 
          isOpen={!!activeMenu} 
          onClose={handleMouseLeave}
          onMouseEnter={() => {
            if (timeoutId) clearTimeout(timeoutId);
          }}
        />
      </div>
    </header>
  )
}
