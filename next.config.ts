import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'agi-prod-file-upload-public-main-use1.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
         protocol: 'https',
        hostname: 'ui-avatars.com',
        
      }
    ]
  }
};

export default nextConfig;
