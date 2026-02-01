import Link from "next/link"
import { Button } from "@/components/button" // Import Button from its new location

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { label: "AI Strategy", href: "/solutions/ai-strategy" },
      { label: "AI Architecture", href: "/solutions/ai-architecture" },
      { label: "ML Engineering", href: "/solutions/ai-engineering" },
      { label: "Data Science", href: "/solutions/data-science" },
      { label: "Agentic AI", href: "/solutions/agentic-ai" },
      { label: "Governance", href: "/solutions/ai-governance" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Industrials", href: "/industries/industrials" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights & Blog", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Research Hub", href: "/applied-research" },
      { label: "Newsletter", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Careers", href: "/about/careers" },
      { label: "Leadership", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-fintricity-navy text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 text-2xl font-bold text-white tracking-tight">
              Fintricity
            </Link>
            <p className="text-fintricity-light-gray max-w-sm mb-6">
              The Operating System for the Agentic Enterprise. Build, deploy, and govern autonomous AI agents that reason, collaborate, and execute at scale.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-fintricity-light-gray hover:text-fintricity-teal transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-fintricity-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-fintricity-medium-gray">
          <p>© {new Date().getFullYear()} Fintricity. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-fintricity-cyan">LinkedIn</Link>
            <Link href="/" className="hover:text-fintricity-cyan">Twitter</Link>
            <Link href="/" className="hover:text-fintricity-cyan">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}