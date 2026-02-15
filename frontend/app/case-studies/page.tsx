import { Metadata } from "next"
import { GlassCard } from "@/components/glass-card"
import { Badge } from "@/components/badge"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore how Fintricity delivers measurable AI outcomes across regulated industries.",
}

const cases = [
  {
    industry: "Financial Services",
    title: "Reducing Fraud Investigation Time by 40%",
    desc: "How a major bank leveraged autonomous agents to accelerate AML investigations.",
    outcome: "40% reduction in cycle time"
  },
  {
    industry: "Insurance",
    title: "Accelerating Claims Processing by 60%",
    desc: "Automating intake and assessment for a national carrier.",
    outcome: "60% faster processing"
  },
  {
    industry: "Industrials",
    title: "Demand Forecasting Accuracy +35%",
    desc: "AI-powered supply chain optimization for a global manufacturer.",
    outcome: "35% accuracy improvement"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-fintricity-charcoal">

      <main className="flex-1">
        <section className="py-24 bg-mesh-gradient border-b border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6">Proven Outcomes.</h1>
            <p className="max-w-2xl mx-auto text-lg">Explore how we help enterprises escape pilot hell and deliver production-ready AI systems.</p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((c, i) => (
                <GlassCard key={i} className="flex flex-col">
                  <Badge variant="teal" className="mb-4">{c.industry}</Badge>
                  <h3 className="mb-4">{c.title}</h3>
                  <p className="text-sm mb-6 flex-grow">{c.desc}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <div className="text-fintricity-teal font-bold">{c.outcome}</div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
