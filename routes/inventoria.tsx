import DropZone from '../islands/DropZone.tsx';
import FileInput from '../islands/FileInput.tsx';
import TextInput from '../islands/TextInput.tsx';

export default function Inventoria() {
	return (
		<div class="flex flex-col justify-center items-center h-screen bg-base-300 pt-24">
			<div className="flex flex-col gap-16 lg:gap-4 lg:flex-row items-center">
				<DropZone />
				<div class="flex flex-col w-96">
					<FileInput />
					<hr class="h-px my-10 border-0 bg-secondary" />
					<TextInput />
				</div>
			</div>
			<div class="flex flex-col items-center gap-4 pt-16 px-8 lg:px-0 text-xl text-primary-content text-center">
				<i>
					An account ID is required to start using Cephalon Navis' inventory tracking system, Navis will only read your account profile and in no way modify or make changes.
				</i>
				<i>To learn more read the FAQ</i>
			</div>
		</div>
	);
}
