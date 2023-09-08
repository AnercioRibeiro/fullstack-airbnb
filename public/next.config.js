/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dctahvizk",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoiYW5lcmNpbyIsImEiOiJjbG1haGlxMnYwdXMyM2NvNTRzOG1uZmY4In0.zwtLMoiV8GT-UJGHWPnosg"
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
