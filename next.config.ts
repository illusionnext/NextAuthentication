import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
    authInterrupts: true,
    dynamicIO: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL,
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_CLIENT_SECRET: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    NEXT_PUBLIC_REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
    NEXT_PUBLIC_SCOPE: process.env.NEXT_PUBLIC_SCOPE,

    NEXT_AUTH_SECRET: process.env.AUTH_SECRET,

    NEXT_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    NEXT_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,

    NEXT_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    NEXT_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // Ensure this matches the Cloudinary hostname
        port: "", // Leave this empty
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
