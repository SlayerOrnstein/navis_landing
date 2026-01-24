interface ButtonProps {
	targetId: string;
	className?: string;
	type: 'button' | 'submit' | 'reset';
	children: preact.ComponentChildren;
}

export default function Button(props: ButtonProps) {
	const handleClick = () => {
		document
			.getElementById(props.targetId)
			?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<button className={props.className} type={props.type} onClick={handleClick}>
			{props.children}
		</button>
	);
}
