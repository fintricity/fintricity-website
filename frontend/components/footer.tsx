import Link from "next/link"
import { Button } from "@/components/button" // Import Button from its new location

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Kendra Fabric", href: "/platform/kendra-fabric" },
      { label: "Kendra Identity", href: "/platform/kendra-identity" },
      { label: "Kendra Workbench", href: "/platform/kendra-workbench" },
      { label: "Kendra Data Fabric", href: "/platform/kendra-data-fabric" },
      { label: "Model Engine Management", href: "/platform/model-engine-management" },
      { label: "Kendra Evaluation", href: "/platform/kendra-evaluation" },
      { label: "Kendra Build", href: "/platform/kendra-build" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Agentic Mesh", href: "/platform/agentic-mesh" },
      { label: "Autonomous Engineering", href: "/solutions" },
      { label: "Intelligent Operations", href: "/solutions" },
      { label: "Compliance & Risk", href: "/solutions" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Technology", href: "/industries/technology" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Industrial", href: "/industries/industrial" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/insights/blog" },
      { label: "News", href: "/insights/news" },
      { label: "Research Hub", href: "/insights" },
      { label: "Lab Notes", href: "/insights" },
      { label: "Documentation", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <img src="/logo.svg" alt="Kendra Labs Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              The Operating System for the Agentic Enterprise. Build, deploy, and govern autonomous AI agents that reason, collaborate, and execute at scale.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-kendra-blue transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kendra Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white">LinkedIn</Link>
            <Link href="/" className="hover:text-white">Twitter</Link>
            <Link href="/" className="hover:text-white">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
