import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,  // Disable React's Strict Mode
  env: {
    SC_DISABLE_SPEEDY: "false",
  },
};

export default nextConfig;
