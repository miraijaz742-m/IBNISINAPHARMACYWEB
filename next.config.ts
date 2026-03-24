import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Static HTML export → deploy folder `out/` to Firebase Hosting */
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
