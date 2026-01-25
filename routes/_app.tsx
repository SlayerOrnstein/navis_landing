import { Head } from 'fresh/runtime';
import TopBar from '../components/TopBar.tsx';
import { define } from '../utils/utils.ts';

export default define.page(function App({ Component }) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="/markdown.css" />
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Cephalon Navis</title>

				<meta name="description" content="An app inspired by Warframe Hub" />

				<meta property="og:url" content="https://navis.minilabs.dev/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Cephalon Navis" />
				<meta property="og:description" content="An app inspired by Warframe Hub" />
				<meta property="og:image" content="/banner.jpg" />
				<meta property="og:logo" content="/logo.svg" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="navis.minilabs.dev" />
				<meta property="twitter:url" content="https://navis.minilabs.dev/" />
				<meta name="twitter:title" content="Cephalon Navis" />
				<meta name="twitter:description" content="An app inspired by Warframe Hub" />
				<meta name="twitter:image" content="/banner.jpg" />
			</head>
			<body>
				<Head>
					<title>Cephalon Navis</title>
				</Head>
				<TopBar></TopBar>
				<Component />
			</body>
			<footer className="footer footer-horizontal footer-center text-center text-gray-400 py-16 bg-base-200">
				<i>
					Built by{' '}
					<a href="https://github.com/SlayerOrnstein" className="text-accent" target="_blank" rel="noopener">
						SlayerOrnstein/HydroNav
					</a>{' '}
				</i>
				<i>Warframe and the Warframe logo are registered trademarks of Digital Extremes Ltd.</i>
				<a href="https://www.buymeacoffee.com/HydroNav" target="_blank" rel="noopener">
					<img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" className="h-20" />
				</a>
			</footer>
		</html>
	);
});
