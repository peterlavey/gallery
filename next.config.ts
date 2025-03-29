import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flowbite.s3.amazonaws.com',
                port: '',
                pathname: '/docs/gallery/square/*',
                search: '',
            },
        ],
    },
};

export default nextConfig;
