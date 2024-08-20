/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized:true
    }
};
module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};


export default nextConfig;
