/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/discord-awards",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
