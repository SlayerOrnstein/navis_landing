import type { MDXComponents } from 'mdx/types';
import FAQ from '@/markdown/faq.mdx';

const overrideComponents: MDXComponents = {
	h1: ({ children }) => <h1 className="text-5xl">{children}</h1>,
	h3: ({ children }) => <h2 className="text-lg">{children}</h2>,
	p: ({ children }) => <p className="pb-8 text-lg">{children}</p>,
	a: ({ href, children }) => (
		<a href={href} className="text-accent hover:text-primary">
			{children}
		</a>
	),
	ol: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
};

export default function Page() {
	return (
		<div className="bg-base-300 py-8 px-8 lg:px-96">
			<FAQ components={overrideComponents} />
		</div>
	);
}
