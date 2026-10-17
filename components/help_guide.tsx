import Image from 'next/image';

function Img(props: { src: string; alt: string }) {
	return <Image src={props.src} alt={props.alt} className='w-full rounded-box' />;
}

export default function HelpGuide() {
	return (
		<div>
			<button
				className='btn btn-ghost text-primary'
				type='button'
				onClick={() => (document.getElementById('help_guide') as HTMLDialogElement).showModal()}
			>
				Need Help?
			</button>
			<dialog id='help_guide' className='modal'>
				<div className='modal-box text-center max-w-none w-xl lg:w-2xl'>
					<h1 className='font-bold text-2xl underline'>How to find your Account ID</h1>
					<div className='py-4'>
						<p className='py-2 text-lg'>
							Step 1. Login to{' '}
							<a href='https://www.warframe.com/login' className='link link-accent'>
								warframe.com
							</a>
						</p>
						<Img src='/img/guide/step_one.png' alt='warframe_login_screen' />
					</div>
					<div className='py-4'>
						<p className='py-2 text-lg'>
							Step 2: Press F12 to open Developer tools and under the storage tab copy the value for 'gid'
						</p>
						<p className='label'>may look different on chrome based browsers</p>
						<Img src='/img/guide/step_two.png' alt='developer_tools_key_visible' />
					</div>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button type='submit'>close</button>
				</form>
			</dialog>
		</div>
	);
}
