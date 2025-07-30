/** @type {import('next').NextConfig} */

// Replace with the actual repository name
const repoName = 'GameJamAITemplate';

const nextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  output: 'export',
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