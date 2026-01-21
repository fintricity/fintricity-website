# Kendra Labs Website Project Plan

This document outlines the Epics and User Stories for the development and management of the Kendra Labs website.

## Epics for Website Creation

### Epic: Foundational Setup & Architecture
*   **Story:** Set up Next.js project with TypeScript.
    *   _Description:_ Initialize the Next.js project, configure TypeScript, and establish basic project structure.
*   **Story:** Configure Tailwind CSS for styling.
    *   _Description:_ Integrate and configure Tailwind CSS for efficient and consistent styling across the application.
*   **Story:** Implement global layout (Header, Footer).
    *   _Description:_ Develop reusable Header and Footer components to ensure consistent navigation and branding.
*   **Story:** Implement Server Component/Client Component architecture.
    *   _Description:_ Properly segment components into Server and Client Components to optimize performance and prevent hydration errors.
*   **Story:** Set up content fetching from local JSON files.
    *   _Description:_ Create a utility to fetch and manage dynamic content from local JSON files.
*   **Story:** Create development startup script (start-dev.sh).
    *   _Description:_ Create a shell script to automate navigating to the frontend directory and starting the dev server on port 3001.

### Epic: Core Page Development & Design Integration
*   **Story:** Develop Homepage (/) with Webify-inspired design.
    *   _Description:_ Implement the homepage layout, sections (hero, features, CTA), and integrate the Webify Architect-inspired light theme.
*   **Story:** Develop Platform Page (/platform) and integrate components.
    *   _Description:_ Create the Platform page, incorporating core platform components and adhering to the new design system.
*   **Story:** Develop Solutions Page (/solutions) and integrate content.
    *   _Description:_ Build the Solutions page, showcasing solutions by function and industry, with integrated design elements.
*   **Story:** Develop Insights Page (/insights) and integrate content.
    *   _Description:_ Create the Insights page for research and lab notes, ensuring consistent styling.
*   **Story:** Develop About Us Page (/about) and integrate content.
    *   _Description:_ Implement the About Us page, detailing the company's mission, philosophy, and team.
*   **Story:** Develop Contact Us Page (/contact) and integrate form.
    *   _Description:_ Build the Contact Us page, including a functional contact form and consistent design.
*   **Story:** Develop Industries Dynamic Page (/industries/[slug]).
    *   _Description:_ Create a dynamic route and client component to render specific industry pages (Financial Services, Healthcare, etc.) from a single template.
*   **Story:** Ensure consistent light theme and Kendra brand colors across all pages.
    *   _Description:_ Verify that the white background, Kendra brand colors, and minimal grey usage are consistently applied throughout the website.
*   **Story:** Implement subtle animations and micro-interactions on all core pages.
    *   _Description:_ Integrate Framer Motion for scroll-triggered animations and subtle hover effects to enhance user experience.

### Epic: Automated Deployment & Management
*   **Story:** Research and select CI/CD platform for Next.js. [COMPLETED]
    *   _Description:_ Selected GitHub Actions for CI/CD and Rsync/SSH for Hostinger deployment.
*   **Story:** Implement CI/CD pipeline for automated builds and tests. [COMPLETED]
    *   _Description:_ Created `.github/workflows/deploy.yml` to automate the build and deploy cycle.
*   **Story:** Configure automated deployment to chosen hosting provider. [COMPLETED]
    *   _Description:_ Configured GitHub Actions to push production artifacts to Hostinger.
*   **Story:** Define and implement content management workflow. [COMPLETED]
    *   _Description:_ Implemented local JSON-driven CMS architecture.
*   **Story:** Integrate monitoring and rollback strategies for deployments. [COMPLETED]
    *   _Description:_ Integrated Sentry for monitoring and PostHog for analytics.

## Epic: Website Content Population

*   **Story:** Finalize content structure for homepage (homepage.json).
    *   _Description:_ Define the JSON schema and content requirements for the homepage.
*   **Story:** Populate all homepage content (hero, features, CTA).
    *   _Description:_ Fill the `homepage.json` file with all necessary text, links, and data for the homepage.
*   **Story:** Finalize content structure for platform page (platform.json).
    *   _Description:_ Define the JSON schema and content requirements for the Platform page.
*   **Story:** Populate all platform page content (core components, CTA).
    *   _Description:_ Fill the `platform.json` file with all necessary text, component details, and data for the Platform page.
*   **Story:** Finalize content structure for solutions page (solutions.json).
    *   _Description:_ Define the JSON schema and content requirements for the Solutions page.
*   **Story:** Populate all solutions page content (functions, industries, economic impact).
    *   _Description:_ Fill the `solutions.json` file with all necessary text, solution details, and data for the Solutions page.
*   **Story:** Finalize content structure for industries (industries.json).
    *   _Description:_ Define the JSON schema and content structure for all industry pages.
*   **Story:** Populate Financial Services industry content.
    *   _Description:_ Create content for the Financial Services industry page in `industries.json`.
*   **Story:** Populate Healthcare & Life Sciences industry content.
    *   _Description:_ Create content for the Healthcare & Life Sciences industry page in `industries.json`.
*   **Story:** Populate Technology & Software industry content.
    *   _Description:_ Create content for the Technology & Software industry page in `industries.json`.
*   **Story:** Populate Retail & E-Commerce industry content.
    *   _Description:_ Create content for the Retail & E-Commerce industry page in `industries.json`.
*   **Story:** Populate Media & Telecommunications industry content.
    *   _Description:_ Create content for the Media & Telecommunications industry page in `industries.json`.
*   **Story:** Populate Industrial industry content.
    *   _Description:_ Create content for the Industrial industry page in `industries.json`.
*   **Story:** Finalize content structure for insights page (insights.json).
    *   _Description:_ Define the JSON schema and content requirements for the Insights page.
*   **Story:** Populate all insights page content (featured report, lab notes, knowledge base).
    *   _Description:_ Fill the `insights.json` file with all necessary text, report details, and data for the Insights page.
*   **Story:** Finalize content structure for about us page (about.json).
    *   _Description:_ Define the JSON schema and content requirements for the About Us page.
*   **Story:** Populate all about us page content (mission, philosophy, story, careers CTA).
    *   _Description:_ Fill the `about.json` file with all necessary text, company details, and data for the About Us page.
*   **Story:** Finalize content structure for contact us page (contact.json).
    *   _Description:_ Define the JSON schema and content requirements for the Contact Us page.
*   **Story:** Populate all contact us page content (hero, form details).
    *   _Description:_ Fill the `contact.json` file with all necessary text and form field details for the Contact Us page.
