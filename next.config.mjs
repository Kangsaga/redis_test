/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // distDir: "build",
  // output: "export",
  // exportTrailingSlash: "true",
  images: {
    loader: "imgix",
    path: "https://kangsaga.github.io/redis_test/images",
    unoptimized: true,
  },
};

export default nextConfig;
