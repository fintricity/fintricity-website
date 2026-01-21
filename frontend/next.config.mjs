import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimized for production deployment
};

// Sentry configuration options
const sentryConfig = {
  silent: true,
  org: "kendra-labs",
  project: "kendra-labs-website",
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
};

export default withSentryConfig(nextConfig, sentryConfig);