import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brenneckewurst.de",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;