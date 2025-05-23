/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      port: '',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
    },
    {
      protocol: 'https',
      hostname: 'scontent.cdninstagram.com',
      port: '',
    },
    ],
  },
  }
  
export default nextConfig;