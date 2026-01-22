import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
 "devIndicators" :false ,
 
  output: 'export', // for static export
  images: {
    unoptimized: true, // required if you use next/image
  },
};

export default nextConfig;

