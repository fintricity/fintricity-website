import Link from "next/link";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Replace this with your actual Notion form URL
const NOTION_JOBS_FORM_URL = "https://tally.so/r/w7NE9L"; 

export default function CareersPage() {
	return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-4 text-kendra-blue">Careers at Kendra Labs</h1>

        <p className="mb-6 text-lg text-gray-700">
          We&apos;re building an Agentic OS for the enterprise and are always interested
          in people who care about architecture, strong data foundations, and shipping
          production-grade AI systems.
        </p>

        <h2 className="text-xl font-semibold mb-3 text-kendra-blue">Open applications</h2>
        <p className="mb-4 text-gray-600">
          Use the form below to tell us about yourself, the kind of role you&apos;re
          looking for, and share links to your work.
        </p>

        <div className="rounded-lg overflow-hidden border border-zinc-200">
          <iframe
            src={NOTION_JOBS_FORM_URL}
            title="Kendra Labs job application form"
            className="w-full"
            style={{ height: 900, border: "none" }}
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-sm text-zinc-500">
          If the embedded form doesn&apos;t load,{" "}
          <Link
            href={NOTION_JOBS_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="underline text-kendra-blue"
          >
            open it in a new tab
          </Link>
          .
        </p>
      </main>

      <Footer />
    </div>
	);
}
