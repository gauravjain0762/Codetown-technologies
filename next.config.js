/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false,

  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
