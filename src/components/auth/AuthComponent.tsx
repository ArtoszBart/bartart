import '@/styles/components/linkButton.scss';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/auth/auth';
import LogOutButton from './LogOutButton';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default async function AuthComponent() {
	const session = await getServerSession(authConfig);

	return (
		<div className='auth-container'>
			{session ? (
				<div className='menu'>
					<a
						className={`button ${robotoMono.className}`}
						href='/downloads'
						rel='noopener noreferrer'
					>
						Downloads
					</a>
					<LogOutButton />
				</div>
			) : (
				<a
					className={`button ${robotoMono.className}`}
					href='/api/auth/signin'
					rel='noopener noreferrer'
				>
					Log In
				</a>
			)}
		</div>
	);
}
