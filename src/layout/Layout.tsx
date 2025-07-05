import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			<main className='min-h-dvh '>{children}</main>
			<Footer />
		</>
	);
}
