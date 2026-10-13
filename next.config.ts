import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/art", destination: "/world/art", permanent: true },
      { source: "/thoughts", destination: "/mind/thoughts", permanent: true },
      { source: "/mind", destination: "/mind/readings", permanent: false },
      { source: "/world", destination: "/world/travels", permanent: false },
    ];
  },
};

export default nextConfig;
