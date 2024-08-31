/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

// Load environment variables
import nextEnv from 'next-env';
import dotenvLoad from 'dotenv-load';

// Load environment variables
dotenvLoad();

// Create Next.js configuration
const nextConfig = {
  images: {
    domains: ['i.postimg.cc'],
  },
};

// Export the configuration
export default createNextIntlPlugin('./src/i18n.ts')(nextConfig);

// Export the environment variables
// module.exports = withNextEnv(nextConfig);