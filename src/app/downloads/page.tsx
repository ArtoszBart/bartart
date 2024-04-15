import { loginIsRequiredServer } from '@/auth/auth';
import { Roboto_Mono } from 'next/font/google';
import { list } from '@vercel/blob';
import localFont from 'next/font/local';
import { getUserProjects } from '@/repository/postgreSQL/userProjectRepository';
import Project from '@/models/Project';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/auth/auth';

const leoscar = localFont({ src: '../../assets/fonts/leoscar.ttf' });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default async function DashboardPage() {
	await loginIsRequiredServer();
	const session = await getServerSession(authConfig);
	if (!session?.user?.email)
		return (
			<main>
				<section className='main'>
					<h1 className={leoscar.className}>Unknown error occured</h1>
				</section>
			</main>
		);

	const projects: Project[] = await getUserProjects(session?.user?.email);
	if (!projects.find((proj) => proj.name === 'Bujnicka-Dent'))
		return (
			<main>
				<section className='main'>
					<h1 className={leoscar.className}>No projects</h1>
				</section>
			</main>
		);

	const folderName = 'bujnicka-dent/';
	const { blobs } = await list({
		prefix: folderName,
	});

	return (
		<main>
			<section className='main'>
				<h1 className={leoscar.className}>Downloads</h1>
			</section>
			<div className='blob-list'>
				{blobs.map((blob) => {
					if (blob.pathname === folderName) return;
					const path = blob.pathname.split('/');
					const fileName = path[path.length - 1]
						.split('.')[0]
						.replace(/_/g, ' ');
					return (
						<div key={blob.pathname} className='blob'>
							<p>{fileName}</p>
							<a
								className={`button ${robotoMono.className}`}
								href={blob.downloadUrl}
								rel='noopener noreferrer'
							>
								Download
							</a>
						</div>
					);
				})}
			</div>
		</main>
	);
}
