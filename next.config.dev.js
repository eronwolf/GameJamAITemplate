/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure proper UTF-8 encoding for emojis
  experimental: {
    esmExternals: false,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;