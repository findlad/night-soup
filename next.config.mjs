/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: { agentUpgrade: 'security' },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
};

export default nextConfig;
