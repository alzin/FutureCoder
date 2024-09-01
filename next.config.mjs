/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  images: {
    domains: ['i.postimg.cc'],
  },
};

export default createNextIntlPlugin('./src/i18n.ts')(nextConfig);

