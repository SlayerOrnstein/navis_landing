import GooglePlayBadge from '../assets/GooglePlayBadge.svg';

export default function InstallSection() {
	return (
		<section
			id="install"
			className="flex flex-col bg-base-100 py-16 text-center justify-center items-center"
		>
			<h1 className="text-3xl text-center font-bold pb-4">
				Download Cephalon Navis
			</h1>
			<p className="text-base text-gray-300">Available on Android</p>
			<a
				href="https://play.google.com/store/apps/details?id=com.cephalon.navis"
				rel="noopener"
				target="_blank"
				className="pt-8"
			>
				<img src={GooglePlayBadge} alt="Google Play" width={200} />
			</a>
		</section>
	);
}
