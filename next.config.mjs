/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized:true
    }
};
// next.config.mjs
export default {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};



export default nextConfig;
