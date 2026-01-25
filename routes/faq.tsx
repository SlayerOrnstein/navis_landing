import { CSS, render } from '@deno/gfm';
import faq from '../assets/faq.md';

export default function FAQ() {
	const document = render(faq.body);

	return (
		<>
			<head>
				<style>{CSS}</style>
				<link rel="stylesheet" href="/markdown.css" />
			</head>
			<div
				id="faq"
				class="py-8 px-96 markdown-body bg-base-200 min-h-screen"
				data-color-mode="dark"
				data-dark-theme="dark"
				// deno-lint-ignore react-no-danger
				dangerouslySetInnerHTML={{ __html: document }}
			/>
		</>
	);
}
