import Community from '../components/Community.tsx';
import Contributions from '../components/Contributions.tsx';
import Features from '../components/Features.tsx';
import Footer from '../components/Footer.tsx';
import Hero from '../components/Hero.tsx';
import InstallSection from '../components/InstallSection.tsx';
import { define } from '../utils/utils.ts';

export default define.page(function Home() {
	return (
		<div class="mx-auto bg-base-300 min-h-screen">
			<Hero></Hero>
			<Features></Features>
			<Contributions></Contributions>
			<InstallSection></InstallSection>
			<Community></Community>
			<Footer></Footer>
		</div>
	);
});
