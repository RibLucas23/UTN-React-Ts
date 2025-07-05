import Layout from '../../layout/Layout';
import Hero from './Hero';
import Products from './Products';

export default function HomeView() {
	return (
		<Layout>
			<Hero />
			<Products />
		</Layout>
	);
}
