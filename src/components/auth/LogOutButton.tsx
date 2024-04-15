'use client';

import { signOut } from 'next-auth/react';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function LogOutButton() {
	return (
		<p
			className={`button ${robotoMono.className}`}
			onClick={() => signOut()}
			rel='noopener noreferrer'
		>
			Log out
		</p>
	);
}
