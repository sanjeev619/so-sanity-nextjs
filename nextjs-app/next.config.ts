import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable React's Strict Mode
  env: {
    SC_DISABLE_SPEEDY: "false",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint errors during production builds
    ignoreDuringBuilds: true,
    

    // Custom ESLint configuration
    // rules: {
    //   // Add your rules here
    //   "no-console": "off", // Disables the 'no-console' rule globally
    //   "react/no-unescaped-entities": "off", // Example rule to disable
    // },
    
  },
};

module.exports = nextConfig;

export default nextConfig;

