import type { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';
import NavBar from '@/components/nav_bar';

export const metadata: Metadata = {
	title: 'Cephalon Navis',
	description: 'A Warframe Hub inspired app',
	metadataBase: new URL('https://navis.minilabs.dev/'),
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				{children}
			</body>
			<footer className="footer footer-horizontal footer-center text-center text-gray-400 py-16 bg-base-200">
				<i>
					Built by{' '}
					<a
						href="https://github.com/SlayerOrnstein"
						className="text-accent"
						target="_blank"
						rel="noopener"
					>
						SlayerOrnstein/HydroNav
					</a>{' '}
				</i>
				<i>
					Warframe and the Warframe logo are registered trademarks of Digital
					Extremes Ltd.
				</i>
				<a
					href="https://www.buymeacoffee.com/HydroNav"
					target="_blank"
					rel="noopener"
				>
					<Image
						src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png"
						alt="Buy Me A Coffee"
						width={200}
						unoptimized
					/>
				</a>
			</footer>
		</html>
	);
}
