import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ["./src/shared/styles"],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: ["*"],
  },
};

export default nextConfig;
