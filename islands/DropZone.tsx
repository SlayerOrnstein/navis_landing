import { codeSignal, processInput } from '../utils/getAccountId.ts';

export default function DropZone() {
	const handleDragOver = (event: Event) => {
		event.preventDefault();
	};

	const handleDrop = (event: DragEvent) => {
		event.preventDefault();
	};

	return (
		<div class="px-8">
			{/** biome-ignore lint/a11y/noStaticElementInteractions: Not that big of a deal yet */}
			<div
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				class={`flex justify-center items-center size-40 lg:size-80 ${
					codeSignal.value ? '' : 'border-2 border-dashed hover:cursor-pointer'
				} rounded-xl border-secondary `}
			>
				{codeSignal.value ? (
					<img src={codeSignal.value.code} alt={codeSignal.value.id} class="rounded-xl" />
				) : (
					<label for="file-input" class="hover:cursor-pointer text-gray-400/0 md:text-gray-400">
						Drag EE.log
						<input id="file-input" type="file" class="sr-only" accept=".log" onInput={processInput} />
					</label>
				)}
			</div>
		</div>
	);
}
