import { Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { FaPhone, FaEnvelope } from 'react-icons/fa6';

// Font files can be colocated inside of `pages`
const leoscar = localFont({ src: '../assets/fonts/leoscar.ttf' });

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={robotoMono.className}>
			<div className='background-video'>
				<video
					preload='none'
					autoPlay
					loop
					muted
					playsInline
					src='https://websites.godaddy.com/categories/v4/videos/raw/video/uA41GmyyG8IMaxXdb'
				>
					Your browser does not support the video tag.
				</video>
			</div>
			<section className='main'>
				<h1 className={leoscar.className}>W trakcie tworzenia</h1>
				<p>Odwiedź tą stronę niedługo</p>
			</section>
			<section>
				<h2>Kontakt:</h2>
				<div className='contact-info'>
					<FaPhone />
					<a className='text-link' href='tel:+48791971029'>
						+48 791-971-029
					</a>
				</div>
				<div className='contact-info'>
					<FaEnvelope />
					<a
						className='text-link'
						href='mailto:bartosz.art@gmail.com'
					>
						bartosz.art@gmail.com
					</a>
				</div>
			</section>
		</main>
	);
}
