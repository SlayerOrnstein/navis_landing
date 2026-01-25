import { processInput } from '../utils/getAccountId.ts';

export default function FileInput() {
	return (
		<label class="text-primary-content">
			Recommended for PC Tenno
			<input
				type="file"
				name="input-file"
				id="input-file"
				accept=".log"
				onInput={processInput}
				class="file-input file-input-primary w-full rounded-xl bg-base-200"
			/>
		</label>
	);
}
