import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL('https://cdn.buymeacoffee.com/buttons/v2/**')],
	},
	pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
	options: { remarkPlugins: [remarkGfm] },
});

export default withMDX(nextConfig);
