import discordLogo from '../assets/Discord-Logo.svg';

export default function Community() {
	return (
		<section className="py-8 px-16 text-center">
			<h1 className="text-3xl text-center font-bold pb-4">
				Join the Community
			</h1>
			<p className="text-gray-400">
				Cephalon Navis is backed by the WFCD a community of Tenno who develop
				apps and tools for the Warframe community.
			</p>
			<div className="flex flex-row justify-center py-8">
				<a
					className="btn bg-[#e0e3ff] py-8 px-8"
					href="https://discord.gg/jGZxH9f"
					rel="noopener"
					target="_blank"
				>
					<img
						className="size-50"
						src={discordLogo}
						alt="Discord"
					/>
				</a>
			</div>
		</section>
	);
}
