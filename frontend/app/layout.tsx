import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "@/components/posthog-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Kendra Labs | The Operating System for the Agentic Enterprise",
    template: "%s | Kendra Labs"
  },
  description: "Move beyond chatbots. Build, deploy, and govern autonomous AI agents that reason, collaborate, and execute at scale.",
  keywords: ["Agentic AI", "Autonomous Agents", "Enterprise AI", "Kendra Fabric", "AI Governance", "Agentic Mesh"],
  authors: [{ name: "Kendra Labs" }],
  creator: "Kendra Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kendralabs.com",
    siteName: "Kendra Labs",
    title: "Kendra Labs | The Operating System for the Agentic Enterprise",
    description: "The unified nervous system for autonomous AI agents. Production-grade infrastructure for the next era of industrial intelligence.",
    images: [
      {
        url: "/logo.svg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "Kendra Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kendra Labs | Agentic OS",
    description: "Engineering reliability into autonomy. The foundation for the agentic firm.",
    images: ["/logo.svg"], // Placeholder
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.svg",
  },
  metadataBase: new URL("https://www.kendralabs.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        <PostHogProvider>
          {children}
        </PostHogProvider>
        
        {/* HubSpot Live Chat / Tracking Script */}
        {portalId && (
          <Script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src={`//js.hs-scripts.com/${portalId}.js`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
