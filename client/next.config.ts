import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@shared": "../shared"
    }
  }
};

export default nextConfig;
