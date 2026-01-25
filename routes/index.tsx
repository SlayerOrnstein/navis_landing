import discordLogo from '../assets/Discord-Logo.svg';
import GooglePlayBadge from '../assets/GooglePlayBadge.svg';
import FeatureCard from '../components/FeatureCard.tsx';
import Button from '../islands/Button.tsx';

import { define } from '../utils/utils.ts';

export default define.page(function Home() {
	return (
		// Hero
		<div class="mx-auto bg-base-300 min-h-screen">
			<section className="hero bg-base-100 min-h-150 items-start">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<img className="h-90" src="logo.svg" alt="Cephalon Navis" />
						<h1 className="text-5xl font-bold text-primary">Cephalon Navis</h1>
						<p className="pt-2 text-xl font-light">An app inspired by Warframe Hub</p>
						<div className="flex gap-1 md:gap-2 lg:gap-8 justify-center pt-8 text-xl">
							<Button target="install">Install Now</Button>
							<Button type="secondary" target="features">
								Explore Features
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section id="features" className="py-4 px-4 md:px-8">
				<h2 className="text-3xl text-center font-bold pb-8">Features</h2>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 align-content-center">
					<FeatureCard
						title="Warframe News"
						subtitle="Stay updated with the latest news, updates, and prime access announcements."
					/>
					<FeatureCard
						title="Sorties"
						subtitle="Stay updated on daily sortie missions, Archon hunts, and Decendia rotations."
					/>
					<FeatureCard
						title="Baro Ki'Teer"
						subtitle="Countdown timer for Baro's arrival and complete inventory listings so you never miss a limited item."
					/>
					<FeatureCard
						title="Void Fissures"
						subtitle="Track both regular and Steel Path void fissures, plus void storms for Railjack missions."
					/>
					<FeatureCard
						title="Invasions"
						subtitle="Monitor all active invasions with reward information to choose your battles wisely."
					/>
					<FeatureCard
						title="Cycle Timers"
						subtitle="Earth day/night, Cetus, Orb Vallis, and Cambion Drift cycle timers at a glance."
					/>
					<FeatureCard
						title="Nightwave"
						subtitle="Track syndicate missions and Nightwave challenges to maximize your standing gains."
					/>
					<FeatureCard
						title="Darvo's Daily Deal"
						subtitle="Check Darvo's discount of the day and grab limited-time marketplace deals."
					/>
					<FeatureCard
						title="Smart Notifications"
						subtitle="Customizable filtered notifications for the events and alerts that matter most to you."
					/>
					<FeatureCard title="1999 Calender" subtitle="Count the days before your new year kiss and grab some loot." />
					<FeatureCard
						title="Synthesis Targets"
						subtitle="Help Cephalon Simaris scan those persky targets with Navis' target location data"
					/>
					<FeatureCard title="Inventory tracking" subtitle="Helps you track mastered weapons in your arsenal." />
				</div>
			</section>

			{/* Contributions */}
			<section className="py-24 px-16">
				<h1 className="text-3xl text-center font-bold pb-4">Help Translate</h1>
				<p className="text-xl text-center">
					Make Cephalon Navis accessible to Tenno around the world by contributing translations for the app interface
					and Warframe worldstate data.
				</p>
				<div className="flex gap-4 justify-center py-8">
					<Button target="https://crowdin.com/project/genesis-parser">Translate Data</Button>
					<Button target="https://navis.t.warframestat.us/" type="secondary">
						Translate App
					</Button>
				</div>
				<p className="text-sm text-center text-gray-400">
					All translations are managed through Crowdin, if you have to choose one, data is more important as it changes
					more frequently.
				</p>
			</section>

			{/* Store buttons */}
			<section id="install" className="flex flex-col bg-base-100 py-16 text-center justify-center items-center">
				<h1 className="text-3xl text-center font-bold pb-4">Download Cephalon Navis</h1>
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

			{/* Comunnity */}
			<section className="py-8 px-16 text-center">
				<h1 className="text-3xl text-center font-bold pb-4">Join the Community</h1>
				<i className="text-gray-400">
					Cephalon Navis is supported by the WFCD a community of Tenno who develop apps and tools for the Warframe
					community.
				</i>
				<div className="flex flex-row justify-center py-8">
					<a className="btn bg-[#e0e3ff] py-8 px-8" href="https://discord.gg/jGZxH9f" rel="noopener" target="_blank">
						<img className="size-50" src={discordLogo} alt="Discord" />
					</a>
				</div>
			</section>
		</div>
	);
});
