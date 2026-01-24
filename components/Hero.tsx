import Button from "../islands/Button.tsx";

export default function Hero() {
	return (
		<section className="hero bg-base-100 min-h-150 items-start">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<img className="h-90" src="logo.svg" alt="Cephalon Navis" />
					<h1 className="text-5xl font-bold text-primary">Cephalon Navis</h1>
					<p className="pt-2 text-xl font-light">
						An app inspired by Warframe Hub
					</p>
					<div className="flex justify-center gap-8 pt-8 text-xl">
						<Button className="btn btn-wide btn-primary" type="button" targetId="install">
							Install Now
						</Button>
						<Button className="btn btn-wide btn-outline btn-primary" type="button" targetId="features">
							Explore Features
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
