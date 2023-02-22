const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
  fallbacks: {
    // TO DO: not working to see why
    document: "/_offline",
  },
});

let config = withPWA({
  reactStrictMode: true,
});

if (process.env.ANALYZE) {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });
  config = withBundleAnalyzer(config);
}

module.exports = config;
