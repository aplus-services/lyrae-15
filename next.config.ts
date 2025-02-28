import type { NextConfig } from 'next'


// next.config.js
// const withPWA = require('next-pwa')({
//   dest: 'public', // Output directory for service worker
//   register: true, // Automatically register service worker
//   skipWaiting: true, // Activate service worker immediately
//   scope: '/app',
//   sw: 'service-worker.js',
//   disable: process.env.NODE_ENV === 'development', // Disable in development mode
// });

// module.exports = withPWA({
//   reactStrictMode: true,
// });


const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr|ar)',
        destination: '/:lang/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/((?!(?:en|fr|ar|front-pages|favicon.ico)\\b)):path',
        destination: '/en/:path',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig
