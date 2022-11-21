/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = {
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["Poppins"] } },
    ],
    appDir: true,
  },
  images: {
    domains: ["spoonacular.com"],
  },
};
