interface FeatureCardProps {
	title: string;
	subtitle: string;
}

export default function FeatureCard(props: FeatureCardProps) {
	return (
		<div className="card bg-base-100 shadow-sm">
			<div className="card-body">
				<h2 className="card-title text-primary text-xl">{props.title}</h2>
				<p className="text-base">{props.subtitle}</p>
			</div>
		</div>
	);
}