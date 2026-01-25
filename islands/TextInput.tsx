import { useState } from 'preact/hooks';
import { codeSignal, getAccountIdQr } from '../utils/getAccountId.ts';

export default function TextInput() {
	const [query, setQuery] = useState('');
	const [_, setSubmitted] = useState(false);

	const isValid = () => {
		if (query === '') return true;
		return /^[0-9a-fA-F]{24}$/.test(query);
	};

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		if (query.trim() && isValid()) {
			codeSignal.value = getAccountIdQr(query.trim());
			setSubmitted(true);
		}
	};

	return (
		<div className="join">
			<div className="w-full">
				<label className="input input-primary validator join-item">
					Account ID
					<input
						type="text"
						name="accountId"
						id="text-input"
						placeholder="679b2f8c9e8d7c6b5a4f3e2d"
						onInput={(e) => {
							const target = e.target as HTMLInputElement;
							setQuery(target.value);
							setSubmitted(false);
						}}
						pattern="^[0-9a-fA-F]{24}$"
						minLength={24}
						maxLength={24}
					/>
				</label>
				<div class="validator-hint hidden">{isValid() ? '' : 'Not a valid account ID'}</div>
			</div>
			<button type="submit" className="btn btn-primary join-item" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
}
