/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: "https://api.kemtech.org",
	},
	images: {
		domains: ["images.unsplash.com"],
	},
};

module.exports = nextConfig;
