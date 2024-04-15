import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/main.scss';
import AuthComponent from '@/components/auth/AuthComponent';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bart Art',
	description: 'Bartosz Art personal webpage',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<header>
					<a href='/'>
						<div className={`logo ${montserrat.className}`}>
							Bartosz Art
						</div>
					</a>
					<AuthComponent />
				</header>

				{children}
				<footer className={montserrat.className}>
					Copyright © 2024 bartart.dev
				</footer>
			</body>
		</html>
	);
}
