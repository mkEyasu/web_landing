/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/web_landing",
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
