/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow LAN connections (such as testing from another laptop or phone)
  allowedDevOrigins: [
    "192.168.5.187:3000",
    "192.168.5.187",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
};

export default nextConfig;
