/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    }
  },
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  }
};

module.exports = nextConfig;
