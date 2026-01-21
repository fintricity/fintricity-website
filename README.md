# Kendra Labs Website

The Operating System for the Agentic Enterprise. This repository contains the source code for the official Kendra Labs website, featuring a modern, light-themed design inspired by architectural precision and engineered for technical clarity.

## 🚀 Overview

Kendra Labs is building the unified nervous system for autonomous AI agents. The website is designed to reflect this "Pragmatic Visionary" tone, moving away from AI hype toward systems engineering reliability.

## 🛠️ Tech Stack

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Content:** Local JSON-driven architecture (Headless CMS ready)
*   **Monitoring:** [Sentry](https://sentry.io/) for error tracking
*   **Analytics:** [PostHog](https://posthog.com/) for product analytics and heatmaps
*   **Spam Protection:** [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)
*   **CRM Integration:** [HubSpot Forms API](https://developers.hubspot.com/docs/api/marketing/forms)

## 📂 Project Structure

```text
├── frontend/               # Next.js Application
│   ├── app/                # App Router (Pages & Routing)
│   ├── components/         # Reusable React Components (Server & Client)
│   ├── content/            # Local JSON data files (CMS Source)
│   ├── lib/                # Utility functions & data fetchers
│   ├── tests/              # Playwright E2E and Smoke Tests
│   └── public/             # Static assets (Logo, SVGs)
├── start-dev.sh            # Root utility script to start development server
├── test-all.sh             # Unified script to run linting, type checks, and E2E tests
├── README_DEPLOYMENT.md    # Detailed guide on architecture, proxying, and deployment
└── WEBSITE_PROJECT_PLAN.md # Detailed project roadmap, Epics, and Stories
```

## 📊 Analytics & Monitoring

### PostHog Setup
1.  **Create a Project:** Log in to [PostHog](https://app.posthog.com/) and create a new project.
2.  **Get API Keys:** Navigate to Project Settings to find your **Project API Key**.
3.  **Environment Variables:** Add the following to your `.env.local` or hosting provider (e.g., Vercel):
    ```bash
    NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key_here
    NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
    ```
4.  **Verification:** Once deployed with keys, you will see real-time events, heatmaps, and session replays in your PostHog dashboard.

### Sentry Monitoring
1.  **Get DSN:** Log in to [Sentry](https://sentry.io/) and create a Next.js project.
2.  **Environment Variable:**
    ```bash
    NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
    ```

## 🏗️ Core Components

*   **Architecture Hub (/platform):** A comprehensive overview of the Kendra Fabric thesis and its eight core pillars.
*   **Product Deep Dives:** Dedicated pages for Workbench, Fabric, Identity, Mesh, Data Fabric, Model Management, Evaluation, and Build.
*   **Industry Solutions:** Dynamic routes (`/industries/[slug]`) tailoring agentic solutions for Finance, Healthcare, Retail, and more.
*   **Insights & Research:** A hub for technical white papers, Lab Notes, and strategic blueprints.
*   **Contact & Lead Capture:** Integrated with HubSpot and protected by Cloudflare Turnstile.

## 📝 How Content Works

The website uses a **Data-Driven Architecture**. All text, labels, and feature lists are stored in `frontend/content/*.json`. 

*   **Adding an Industry:** Simply add a new key to `industries.json`. The dynamic route `/industries/[new-key]` will be generated automatically.
*   **Updating Products:** Edit `products.json` to update features or deep-dive descriptions.

This decoupled approach allows for rapid content iteration without modifying the underlying UI components.

## 💻 Getting Started

### Prerequisites
*   Node.js v20+
*   npm

### Start Development Server
From the root directory, run the executable script:
```bash
./start-dev.sh
```
The site will be available at **http://localhost:3001**.

---

© 2026 Kendra Labs. Built with precision for the agentic era.
