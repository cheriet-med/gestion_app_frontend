
module.exports = {
  i18n: {
    locales: ['en-US', 'fr', 'ar'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '**',
      },
    ],
  },


  
}


