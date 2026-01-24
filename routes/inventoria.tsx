import DropZone from '../islands/DropZone.tsx';
import FileInput from '../islands/FileInput.tsx';
import TextInput from '../islands/TextInput.tsx';

export default function Inventoria() {
	return (
		<div class="flex flex-col justify-center items-center h-screen bg-base-300">
			<div>
				<div class="flex items-center">
					<DropZone />
					<div class="flex flex-col w-96">
						<FileInput />
						<hr class="h-px my-10 border-0 bg-secondary" />
						<TextInput />
					</div>
				</div>
			</div>
			<div class="flex flex-col items-center pt-32 text-xl text-primary-content">
				<i>
					An account ID is required to start using the Cephalon Navis' Arsenal
					system, this tool will help the Cephalon pull your player profile from
					the Ordis' inventory system.
				</i>
				<i>To learn more checkout the FAQ</i>
			</div>
		</div>
	);
}
