/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// Disable built-in image optimization (avoids upstream fetch errors in dev)
		unoptimized: true,
	},
}

module.exports = nextConfig
