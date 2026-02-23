import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/portfolio-generator" : "",
  assetPrefix: isGithubPages ? "/portfolio-generator/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;