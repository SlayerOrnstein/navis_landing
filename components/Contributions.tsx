export default function Contributions() {
	return (
		<section className="py-24 px-16">
			<h1 className="text-3xl text-center font-bold pb-4">Help Translate</h1>
			<p className="text-xl text-center">
				Make Cephalon Navis accessible to Tenno around the world by contributing
				translations for the app interface and Warframe worldstate data.
			</p>
			<div className="flex gap-4 justify-center py-8">
				<a
					className="btn btn-wide btn-primary"
					href="https://crowdin.com/project/genesis-parser"
					rel="noopener"
					target="_blank"
				>
					Translate Data
				</a>
				<a
					className="btn btn-wide btn-outline btn-primary"
					href="https://navis.t.warframestat.us/"
					rel="noopener"
					target="_blank"
				>
					Translate App
				</a>
			</div>
			<p className="text-sm text-center text-gray-400">
				All translations are managed through Crowdin, if you have to choose one,
				data is more important as it changes more frequently.
			</p>
		</section>
	);
}
