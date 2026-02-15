import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Fintricity Brand Palette (now direct hex values for top-level names)
        'fintricity-navy': '#1E3A5F',           // Primary: Deep Navy Blue
        'fintricity-teal': '#2A6E8F',           // Secondary: Teal/Innovation Blue
        'fintricity-cyan': '#32B8C6',           // Accent: Bright Cyan
        'fintricity-charcoal': '#333333',       // Supporting: Dark Gray (Body Text)
        'fintricity-light-gray': '#F5F5F5',     // Supporting: Light Gray (Section Backgrounds)
        
        // Functional & Secondary Colors (now direct hex values)
        'fintricity-success-green': '#22C55E',  // Status Green
        'fintricity-alert-orange': '#EA580C',   // Alert Orange
        'fintricity-medium-gray': '#666666',    // Medium Gray
        'fintricity-card-border': '#E0E0E0',    // Light Gray (Card Border/Grid)
        'fintricity-cyan-dark': '#1F9BA5',      // Darker Cyan (Primary CTA Hover)
        'fintricity-very-light-teal': '#F0F8FA',// Very light Teal (Card Hover, Metric Callout)

        // New Fintricity Brand Colors from Design System CSS (granular definitions)
        'fintricity-blue-1-base': '#4B5FAE',
        'fintricity-blue-1-1': '#D9DEF0',
        'fintricity-blue-1-2': '#B5BEE0',
        'fintricity-blue-1-3': '#909ED1',
        'fintricity-blue-1-4': '#4B5FAE',
        'fintricity-blue-1-5': '#384782',
        
        'fintricity-blue-2-base': '#2A6E8F', // Original Teal/Innovation Blue from user's request
        'fintricity-blue-2-1': '#DAEDEF',
        'fintricity-blue-2-2': '#B6DBDF',
        'fintricity-blue-2-3': '#91C9D0',
        'fintricity-blue-2-4': '#36A2DE',
        'fintricity-blue-2-5': '#2E7C86',
        
        'fintricity-teal-green-base': '#32B8C6', // Original Bright Cyan from user's request
        'fintricity-teal-green-1': '#E0F2F4',
        'fintricity-teal-green-2': '#B3DFE3',
        'fintricity-teal-green-3': '#32B8C6',
        'fintricity-teal-green-4': '#358A93',
        'fintricity-teal-green-5': '#2A6E76',
        
        'fintricity-navy-base': '#1E3A5F', // Deep Navy Blue: #1E3A5F (Primary)
        'fintricity-navy-1': '#9492D1', 
        'fintricity-navy-2': '#615BB9',
        'fintricity-navy-3': '#1F3A47', // Ensuring Deep Navy Blue is #1F3A47
        'fintricity-navy-4': '#1A1738',
        'fintricity-navy-5': '#0D0B1C',
        
        'fintricity-neutral-base': '#B1BACC',
        'fintricity-neutral-1': '#E5E8EE', 
        'fintricity-neutral-2': '#CAD1DD', 
        'fintricity-neutral-3': '#666666', 
        'fintricity-neutral-4': '#333333', 
        'fintricity-neutral-5': '#2A3342',
      },
      fontSize: { 
        // Brand Typography
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }], // 48px
        'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }], // 36px
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px
        'h4': ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }], // 18px
        'body-primary': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-secondary': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }], // 14px

        // Mobile Typography (can be used with md: prefix or specific classes)
        'h1-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }], // 32px
        'h2-mobile': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }], // 24px
        'h3-mobile': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }], // 18px
        'h4-mobile': ['1rem', { lineHeight: '1.5', fontWeight: '500' }], // 16px

        // Legacy/Utility display sizes
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"], // Inter for headings and body
        mono: ["'JetBrains Mono'", "monospace"], // JetBrains Mono for code/data
      },
    },
  },
  plugins: [],
};

export default config;