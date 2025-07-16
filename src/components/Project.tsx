import Image from 'next/image';

interface IProps {
  imageName: string;
  name: string;
  url: string;
  paid?: boolean;
}

export default function Project({ imageName, name, url, paid }: IProps) {
  return (
    <a
      className='projects-card'
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='projects-card-image'>
        <Image
          src={`https://sbfdnoibxzyv44dj.public.blob.vercel-storage.com/projects/${imageName}`}
          alt='bujnicka-dent'
          fill
          style={{ objectFit: 'contain', objectPosition: 'top' }}
        />
      </div>

      <div className='projects-card-title'>
        {paid ? (
          <i className='fa-solid fa-dollar-sign'></i>
        ) : (
          <i className='fa-regular fa-chess-knight'></i>
        )}
        <h3>{name}</h3>
      </div>
    </a>
  );
}
