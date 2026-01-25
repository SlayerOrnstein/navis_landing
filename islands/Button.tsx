interface ButtonProps {
	target: string;
	type?: 'primary' | 'secondary';
	children: preact.ComponentChildren;
}

export default function Button({ target: targetId, type = 'primary', children }: ButtonProps) {
	const handleClick = () => {
		if (targetId.startsWith('http')) {
			globalThis.open(new URL(targetId), '_blank', 'noopener=true');
		}

		document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	const className = `btn md:btn-wide btn-primary ${type === 'primary' ? '' : 'btn-outline'}`;

	return (
		<button className={className} type="button" onClick={handleClick} title={targetId}>
			{children}
		</button>
	);
}
