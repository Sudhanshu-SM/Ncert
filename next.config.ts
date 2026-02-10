/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- This is the most important line
  images: {
    unoptimized: true, // <--- Required for GitHub Pages if you use <Image>
  },
};

export default nextConfig;
