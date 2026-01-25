import { useRef, useState } from 'preact/hooks';
import { codeSignal, getAccountIdQr } from '../utils/getAccountId.ts';

export default function TextInput() {
	const [value, setValue] = useState('');
	const [isValid, setValid] = useState(true);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		if (value.trim()) {
			codeSignal.value = getAccountIdQr(value.trim());
		}
	};

	const onInput = () => {
		const inputValue = inputRef.current?.value;
		if (!inputValue) {
			setValid(true);
			return;
		}

		setValid(/^[0-9a-fA-F]{24}$/.test(inputValue));
		if (isValid) setValue(value);
	};

	return (
		<div className="join">
			<div className="w-full">
				<label className={`input ${isValid ? 'input-primary' : 'input-error'} validator join-item`}>
					Account ID
					<input
						type="text"
						name="accountId"
						id="text-input"
						placeholder="679b2f8c9e8d7c6b5a4f3e2d"
						onInput={onInput}
						value={value}
						ref={inputRef}
						pattern="^[0-9a-fA-F]{24}$"
						minLength={24}
						maxLength={24}
					/>
				</label>
				<div class="validator-hint hidden">{isValid ? '' : 'Not a valid account ID'}</div>
			</div>
			<button type="submit" className="btn btn-primary join-item" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
}
