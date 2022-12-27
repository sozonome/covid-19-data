const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  redirects: async () => {
    return [
      {
        source: "/:path*",
        destination: process.env.BASE_URL_REDIRECT,
        permanent: false,
      },
    ];
  },
});
