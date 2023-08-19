/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.github.io",
        port: '',
        pathname: '/maqueta-ong/**',
      },
    ],
  },
};

module.exports = nextConfig;
