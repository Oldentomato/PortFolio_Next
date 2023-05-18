/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");


module.exports = withContentlayer({
  reactStrictMode: true,
  experimental: { appDir: true },
  images:{
    domains:[
      'www.notion.so',
      'images.unsplash.com'
    ]
  }
});
