import { useState } from 'preact/hooks';
import { codeSignal, getAccountIdQr } from '../utils/getAccountId.ts';

export default function TextInput() {
	const [query, setQuery] = useState('');
	const [_, setSubmitted] = useState(false);

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		if (query.trim()) {
			codeSignal.value = getAccountIdQr(query.trim());
			setSubmitted(true);
		}
	};

	const isValid = () => {
		if (query === '') return true;
		return /^[0-9a-fA-F]{24}$/.test(query);
	};

	return (
		<div className="flex flex-col items-end">
			<form
				className="flex flex-col items-end w-full space-y-2"
				onSubmit={handleSubmit}
			>
				<label className="relative w-full text-color-secondary">
					Recommended for Console players
					<div >
						<input
							type="text"
							name="accountId"
							id="text-input"
							placeholder="Enter Warframe Account ID"
							onInput={(e) => {
								const target = e.target as HTMLInputElement;
								setQuery(target.value);
								setSubmitted(false);
							}}
							pattern="^[0-9a-fA-F]{24}$"
							minLength={24}
							maxLength={24}
							className="input-ghost w-full p-2 rounded-xl outline outline-primary bg-base-200"
						/>
						<button
							type="submit"
							className="absolute right-0 transform -translate-y-[1%] translate-x-[0%] rounded-xl outline outline-primary text-primary-content px-4 py-2 bg-primary"
						>
							Submit
						</button>
					</div>
				</label>
				{isValid() ? (
					''
				) : (
					<span className="text-error">Not a valid account ID</span>
				)}
			</form>
		</div>
	);
}
