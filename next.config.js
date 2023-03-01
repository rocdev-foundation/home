const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  // reactStrictMode: true,
  webpack(config, options) {
    return config;
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
