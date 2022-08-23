/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites() {
    return [
      {
        source: "/page-a",
        destination: "/page-b"
        // permanent: false,
      }
    ];
  }
};

module.exports = nextConfig;
