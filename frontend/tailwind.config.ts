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
        // Explicit Kendra Brand Colors
        "kendra-grey": "#6b7280", // A utility grey for subtle elements
        "kendra-blue": "#001555", // Primary dark blue for main headings/elements
        "kendra-orange": "#ED9400", // Accent orange for CTAs and highlights
        "kendra-plum": "#990045", // Accent plum for primary CTAs and emphasis
        "kendra-yellow": "#EDBC00", // Accent yellow for secondary highlights

        // Tailwind HSL vars, derived from globals.css for light theme
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))", // Maps to Kendra Blue or a vibrant utility blue
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
      fontSize: { // Semantic names for font sizes
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }], // Responsive display sizes
        'display-xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['1.875rem', { lineHeight: '1.35', fontWeight: '700' }],
        'display-xs': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'text-xl': ['1.25rem', { lineHeight: '1.5' }],
        'text-lg': ['1.125rem', { lineHeight: '1.6' }],
        'text-md': ['1rem', { lineHeight: '1.6' }],
        'text-sm': ['0.875rem', { lineHeight: '1.7' }],
        'text-xs': ['0.75rem', { lineHeight: '1.8' }],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
