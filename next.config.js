/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/web_landing",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["https://mkeyasu.github.io/web_landing/"],
  },
};

module.exports = nextConfig;
