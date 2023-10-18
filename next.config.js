// next.config.js

/** @type {import('next').NextConfig} */

const webpack = require("webpack");
const nextConfig = {

    eslint: { 
        ignoreDuringBuilds: true
     }, 
     env: {
        BASE_URL: 'https://www.ganeshmri.com/',
      },
    async headers() {
        return [
            {    
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://www.ganeshmri.com/" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
         new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery",
      }));
     return config;
    }
} 

module.exports = nextConfig
   