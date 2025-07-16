import AuthComponent from '@/components/auth/AuthComponent';
import type { Metadata } from 'next';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import '../styles/main.scss';

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
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
          integrity='sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </head>
      <body className={robotoMono.className}>
        <header>
          <a href='/'>
            <div className={`logo ${montserrat.className}`}>Bartosz Art</div>
          </a>
          <AuthComponent />
        </header>

        {children}
        <footer className={montserrat.className}>
          Copyright © 2025 Bartosz Art
        </footer>
      </body>
    </html>
  );
}
