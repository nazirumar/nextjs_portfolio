import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export', // Remove this if you want to enable SSR/ISR and Sentry
  reactStrictMode: true,
};

export default withSentryConfig(nextConfig, {
  org: "nazbeen-multimedia",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
