const withPWA = require("next-pwa")({
  dest: "public",
});

let nextConfig = withPWA({
  // next.js config
  reactStrictMode: true,
});

module.exports = nextConfig;
