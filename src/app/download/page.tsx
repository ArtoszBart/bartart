import { loginIsRequiredServer } from '@/auth/auth';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default async function DashboardPage() {
	await loginIsRequiredServer();
	return (
		<main className='main'>
			<h1>Downloads</h1>
		</main>
	);
}
