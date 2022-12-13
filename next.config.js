/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["w3.org"],
  },
};

module.exports = nextConfig;
