/** @type {import('next').NextConfig} */

// Replace '<repository-name>' with the actual name of your GitHub repository
const repoName = '<repository-name>'; 
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off trailing slash if it exists
  assetPrefix = `/${repoName}/`.replace(/\\/\\/$/, '');
  basePath = `/${repoName}`.replace(/\\/\\/$/, '');
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    // Vercel auto-optimizes images. For GitHub Pages, you might need to disable this
    // or configure a custom loader if you use next/image extensively with optimization.
    // For simplicity with static export, unoptimized might be easier if you face issues.
    unoptimized: true, 
  },
  // Optional: if you want URLs like /about/ instead of /about.html
  trailingSlash: true, 
};

module.exports = nextConfig;
