import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ignoreBuildErrors: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.freetogame.com',
        port: '',
        pathname: '/g/*/thumbnail.jpg',
        search: '',
      },
    ],
  },
};

export default nextConfig;
