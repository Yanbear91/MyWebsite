import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.1.213'],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'surgewebstudio.com' }],
        destination: 'https://www.surgewebstudio.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;


