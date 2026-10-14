import { qrcode } from '@libs/qrcode';

export type ValidPlatform = 'pc' | 'ps4' | 'xb1' | 'swi' | 'ios' | 'mobi';

export interface CodeProps {
	id: string | undefined;
	platform: ValidPlatform | undefined;
}

function createQRCode(id: string, platform: ValidPlatform) {
	const code = qrcode(JSON.stringify({ accountId: id, platform: platform }), {
		output: 'svg',
	});

	return `data:image/svg+xml,${encodeURIComponent(code)}`;
}

export default function QRCodeImage(props: CodeProps) {
	const { id, platform } = props;
	const className =
		'size-40 md:size-60 lg:size-80 border-2 rounded-xl border-secondary';

	if (id === undefined || platform === undefined) {
		return <div className={className}></div>;
	}

	return (
		<img
			src={createQRCode(id, platform)}
			className={className}
			alt="inventoria-setup-info"
		/>
	);
}
