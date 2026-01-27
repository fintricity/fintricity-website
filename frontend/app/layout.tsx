import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/components/posthog-provider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Fintricity | The Operating System for the Agentic Enterprise",
    template: "%s | Fintricity"
  },
  description: "Move beyond chatbots. Build, deploy, and govern autonomous AI agents that reason, collaborate, and execute at scale.",
  keywords: ["Agentic AI", "Autonomous Agents", "Enterprise AI", "Kendra Fabric", "AI Governance", "Agentic Mesh"],
  authors: [{ name: "Fintricity" }],
  creator: "Fintricity",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kendralabs.com",
    siteName: "Fintricity",
    title: "Fintricity | The Operating System for the Agentic Enterprise",
    description: "The unified nervous system for autonomous AI agents. Production-grade infrastructure for the next era of industrial intelligence.",
    images: [
      {
        url: "/logo.svg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "Fintricity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintricity | Agentic OS",
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
      <body className={`${inter.variable} antialiased font-sans`}>
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
