/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cf.geekdo-images.com",
      },
    ],
  },
};

module.exports = nextConfig;
