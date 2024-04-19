/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "smasar0i",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "skr5yHb99tZpidD1OO4XX6L3EUoumfp8BGJFHymcYIHQXOvgNn10chEJRGcO0GZRB2Le10o2m5kAtsFMu0z6YcPD9uyvquGOwQGF9qdzO4QJZlgGozLxKeDng468JpJUGTWraKDeqzCVwO0A3wuOg8C6tdsG8CMYvUzXNJdhYcvEBoE8TApH",
  },
};

export default nextConfig;
