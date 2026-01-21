"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"

// Placeholder for icons if not using lucide-react
const ChevronDown = ({ className, ...props }: any) => <span className={`inline-block ml-1 h-4 w-4 transition-transform ${className}`} {...props}>&#9662;</span>;
const X = ({ className, ...props }: any) => <span className={`inline-block ${className}`}>✕</span>;
const Menu = ({ className, ...props }: any) => <span className={`inline-block ${className}`}>☰</span>;

const navItems = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Kendra Fabric", href: "/platform/kendra-fabric", description: "The orchestration engine for autonomous agents." },
      { label: "Kendra Identity", href: "/platform/kendra-identity", description: "Secure identity management for AI agents." },
      { label: "Kendra Workbench", href: "/platform/kendra-workbench", description: "Development environment for building workflows." },
      { label: "Kendra Data Fabric", href: "/platform/kendra-data-fabric", description: "Unified data layer for context-aware AI." },
      { label: "Model Engine", href: "/platform/model-engine-management", description: "Optimize and manage LLM inference at scale." },
      { label: "Kendra Evaluation", href: "/platform/kendra-evaluation", description: "Continuous testing for AI reliability." },
      { label: "Kendra Build", href: "/platform/kendra-build", description: "CI/CD pipelines for agentic systems." },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Agentic Mesh", href: "/platform/agentic-mesh", description: "Decentralized agent communication network." },
      { label: "Autonomous Engineering", href: "/solutions/engineering", description: "Automate code generation and system maintenance." },
      { label: "Intelligent Operations", href: "/solutions/operations", description: "AI-driven IT and business operations." },
      { label: "Compliance & Risk", href: "/solutions/compliance", description: "Automated governance and risk monitoring." },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Financial Services", href: "/industries/financial-services", description: "Fraud detection and algorithmic trading agents." },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare", description: "Patient data analysis and drug discovery." },
      { label: "Technology & Software", href: "/industries/technology", description: "Accelerate development and QA cycles." },
      { label: "Retail & E-Commerce", href: "/industries/retail", description: "Personalized shopping and inventory management." },
      { label: "Media & Telecom", href: "/industries/media", description: "Content generation and network optimization." },
      { label: "Industrial", href: "/industries/industrial", description: "Predictive maintenance and supply chain automation." },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "The Blueprint (Blog)", href: "/insights/blog", description: "Strategic thinking on the future of AI." },
      { label: "Newsroom", href: "/insights/news", description: "Latest company announcements and press." },
      { label: "Research Hub", href: "/insights", description: "Deep dives into agentic architecture." },
      { label: "Lab Notes", href: "/insights", description: "Technical engineering logs and experiments." },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Company", href: "/about/company", description: "Our mission, vision, and team." },
      { label: "Careers", href: "/about/careers", description: "Join us in building the Agentic OS." },
    ],
  },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Kendra Labs Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="group relative h-full flex items-center">
              <Link
                href={item.href}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-kendra-blue transition-colors py-2"
              >
                {item.label}
                {item.children && <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full hidden w-[600px] pt-4 group-hover:block transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xl grid grid-cols-2 gap-x-8 gap-y-6">
                    {item.children.map((child: any) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="group/item block space-y-1 rounded-lg p-2 -m-2 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900 group-hover/item:text-kendra-blue transition-colors">
                          {child.label}
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {child.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login" className="text-kendra-blue hover:text-kendra-blue/80">Log in</Link>
          </Button>
          <Button size="sm" variant="plum">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-kendra-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white p-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="space-y-2">
              <Link
                href={item.href}
                className="block text-lg font-medium text-gray-800 hover:text-kendra-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 space-y-4 border-l border-gray-200 pl-4 py-2">
                  {item.children.map((child: any) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block space-y-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-sm font-medium text-gray-700">{child.label}</div>
                      <div className="text-xs text-gray-500">{child.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full border-kendra-blue text-kendra-blue hover:bg-kendra-blue/5">
              <Link href="/login">Log in</Link>
            </Button>
            <Button variant="plum" className="w-full">
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
