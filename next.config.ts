import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
 "devIndicators" :false ,
 reactStrictMode: true,
 
 
  images: {
    unoptimized: true, // required if you use next/image
  },
};

export default nextConfig;

