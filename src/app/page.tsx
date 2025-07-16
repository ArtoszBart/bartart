import Project from '@/components/Project';
import localFont from 'next/font/local';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const leoscar = localFont({ src: '../assets/fonts/leoscar.ttf' });

export default function Home() {
  return (
    <main>
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
          <a className='text-link' href='mailto:bartosz.art@gmail.com'>
            bartosz.art@gmail.com
          </a>
        </div>
      </section>

      <section>
        <div className='projects'>
          <Project
            imageName='bujnicka-dent.webp'
            name='Bujnicka-Dent'
            url='https://bujnicka-dent.pl/'
            paid
          />
          <Project
            imageName='modern-car.webp'
            name='Modern-Car'
            url='https://modern-car.bartart.dev/'
            paid
          />
          <Project
            imageName='issue-tracker.webp'
            name='Issue Tracker'
            url='https://issue-tracker.bartart.dev/'
          />
          <Project
            imageName='game-hub.webp'
            name='Game Hub'
            url='https://game-hub.bartart.dev/'
          />
          <Project
            imageName='price-tracker.webp'
            name='Price Tracker'
            url='https://price-checker-nine.vercel.app/'
          />
          <Project
            imageName='interactive-avatar.webp'
            name='Interactive Avatar'
            url='https://assistant.bartart.dev/'
          />
        </div>
      </section>
    </main>
  );
}
