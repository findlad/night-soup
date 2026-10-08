const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = process.env.GITHUB_ACTIONS === 'true' && repositoryName
  ? `/${repositoryName}`
  : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
