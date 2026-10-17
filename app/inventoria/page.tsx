'use client';

import { useState } from 'react';
import QRCodeImage, { type ValidPlatform } from '@/components/qrcode';
import HelpGuide from '@/components/help_guide';

export default function Inventoria() {
	const [id, setId] = useState<string | undefined>(undefined);
	const [platform, setPlatform] = useState<ValidPlatform | undefined>(undefined);

	return (
		<div className='flex flex-col justify-center items-center min-h-screen bg-base-300 pt-24'>
			<div className='flex flex-row items-center gap-12'>
				<QRCodeImage id={id} platform={platform} />

				<fieldset className='fieldset flex flex-col items-end bg-base-200 border-base-300 rounded-box w-xs border p-4 gap-4'>
					<label className='floating-label w-xs' htmlFor='accountId'>
						<span>Account ID</span>
						<input
							id='account-id'
							type='text'
							className='input input-primary'
							placeholder='Account ID'
							value={id}
							onChange={(e) => setId(e.target.value)}
						/>
					</label>
					<select
						id='platform-select'
						defaultValue='Select Platform'
						value={platform}
						onChange={(e) => setPlatform(e.target.value as ValidPlatform)}
						className='select select-primary'
					>
						<option disabled={true}>Select Platform</option>
						<option value='pc'>PC</option>
						<option value='ps4'>Playstation</option>
						<option value='xb1'>Xbox</option>
						<option value='swi'>Nintendo</option>
						<option value='ios'>iOS</option>
						<option value='mobi'>Android</option>
					</select>
					<HelpGuide />
				</fieldset>
			</div>
		</div>
	);
}
