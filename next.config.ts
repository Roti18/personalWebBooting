// next.config.ts

import type { NextConfig } from "next";

const repo = "personalWebBooting";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
    domains: ["storageangkatan.netlify.app"],
  },
};

export default nextConfig;
