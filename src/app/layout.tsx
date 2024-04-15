import type { Metadata } from 'next';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import '../styles/main.scss';
import AuthComponent from '@/components/auth/AuthComponent';

const montserrat = Montserrat({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

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
			<body className={robotoMono.className}>
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
