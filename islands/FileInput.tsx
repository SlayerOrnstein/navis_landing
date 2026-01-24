import { processInput } from '../utils/getAccountId.ts';

export default function FileInput() {
	return (
		<div class="flex flex-col ">
			<form class="flex flex-col items-end  space-y-2">
				<label class="text-primary-content">
					Recommended for PC players
					<input
						type="file"
						name="input-file"
						id="input-file"
						accept=".log"
						onInput={processInput}
						class="file-input-ghost file:bg-primary file:text-primary-content file:hover:cursor-pointer file:rounded-btn border border-primary rounded-xl file:p-2 w-full bg-base-200"
					/>
				</label>
			</form>
		</div>
	);
}
