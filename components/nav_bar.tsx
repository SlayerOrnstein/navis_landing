export default function NavBar() {
	return (
		<nav className="navbar bg-base-200 max-w-screen px-8 py-4 items-end-safe justify-end">
			<div className="flex flex-row items-center space-x-8 text-base-content text-lg">
				<a href="/">Home</a>
				<a href="/inventoria">Inventoria</a>
				<a href="/faq">FAQ</a>
			</div>
		</nav>
	);
}