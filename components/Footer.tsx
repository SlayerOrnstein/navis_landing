export default function Footer() {
	return (
		<footer className="footer footer-horizontal footer-center text-center text-gray-400 py-4">
			<p>&copy; 2026 Cephalon Navis. All rights reserved.</p>
			<p>
				Built by the{' '}
				<a href="https://github.com/WFCD" className="text-accent">
					Warframe Community Developers
				</a>{' '}
			</p>
			<p >
				Warframe and the Warframe logo are registered trademarks of Digital
				Extremes Ltd.
			</p>
			<a
				href="https://www.buymeacoffee.com/HydroNav"
				target="_blank"
				rel="noopener"
			>
				<img
					src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png"
					alt="Buy Me A Coffee"
					className="h-20"
				/>
			</a>
		</footer>
	);
}
