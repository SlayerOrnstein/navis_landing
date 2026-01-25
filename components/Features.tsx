interface FeatureCardProps {
	title: string;
	subtitle: string;
}

function FeatureCard(props: FeatureCardProps) {
	return (
		<div className="card bg-base-100 shadow-sm">
			<div className="card-body">
				<h2 className="card-title text-primary text-xl">{props.title}</h2>
				<p className="text-base">{props.subtitle}</p>
			</div>
		</div>
	);
}

export default function Features() {
	return (
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
				<FeatureCard
					title="1999 Calender"
					subtitle="Count the days before your new year kiss and grab some loot."
				/>
				<FeatureCard
					title="Synthesis Targets"
					subtitle="Help Cephalon Simaris scan those persky targets with Navis' target location data"
				/>
				<FeatureCard
					title="Inventory tracking"
					subtitle="Helps you track mastered weapons in your arsenal."
				/>
			</div>
		</section>
	);
}
