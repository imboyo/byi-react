/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    }
  },
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com", "api.unsplash.com"],
  }
};

module.exports = nextConfig;
