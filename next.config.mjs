/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Generate sitemap and robots.txt
  trailingSlash: false,
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // Redirects for SEO and domain management
  async redirects() {
    return [
      // Domain redirects - redirect alternative domains to primary
      // Note: These work when deployed with proper domain configuration
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sonint.io',
          },
        ],
        destination: 'https://sonint.io/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sonint.in',
          },
        ],
        destination: 'https://sonint.io/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sonint.vercel.app',
          },
        ],
        destination: 'https://sonint.io/:path*',
        permanent: true,
      },
      // Add other SEO redirects as needed
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ]
  },
}

export default nextConfig
