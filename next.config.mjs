/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized:true
    }
};
const config = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default config;




