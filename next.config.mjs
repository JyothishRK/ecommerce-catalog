const nextConfig = {
  reactStrictMode: true,
  env: {
    API_GETALL_URL: process.env.API_GETALL_URL,
    API_GETBYID_URL: process.env.API_GETBYID_URL,
    API_SEARCH_URL: process.env.API_SEARCH_URL,
  },
};

export default nextConfig;