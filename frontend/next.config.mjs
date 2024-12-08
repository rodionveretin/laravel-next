/** @type {import('next').NextConfig} */

const nextConfig = {
	sassOptions: {
		implementation: 'sass-embedded',
		additionalData: '@import "public/assets/sass/base/variables.scss";',
	},
};

export default nextConfig;
