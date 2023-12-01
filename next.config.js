const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
});
