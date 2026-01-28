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
        // Fintricity Design System (Updated)
        "fintricity-navy": "#1F3A47",   // Primary: Trust, stability
        "fintricity-teal": "#2A6E8F",   // Secondary: Innovation
        "fintricity-cyan": "#32B8C6",   // Accent: Energy
        "fintricity-light-gray": "#F5F5F5", // Supporting: Backgrounds
        "fintricity-charcoal": "#333333", // Supporting: Text
        "fintricity-success": "#22C55E", // Status: Success
        "fintricity-alert": "#EA580C",   // Status: Alert

        // Semantic Brand Colors (Mapped to new palette)
        "brand-primary": "var(--brand-primary)",
        "brand-secondary": "var(--brand-secondary)",
        "brand-accent": "var(--brand-accent)",
        "brand-emphasis": "var(--brand-emphasis)",

        // Tailwind HSL vars, derived from globals.css for light theme
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))", // Maps to Primary Blue or a vibrant utility blue
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
