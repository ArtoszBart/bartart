import Project from '@/models/Project';
import { db, createClient } from '@vercel/postgres';

export const getUserProjects = async (
	userEmail: string
): Promise<Project[]> => {
	const query = process.env.SQL_GET_USERPPROJECTS as string;
	const params = [userEmail];

	let projects: Project[] = [];

	const client = createClient();
	await client.connect();
	try {
		const { rows } = await client.query(query, params);
		projects = rows as Project[];
	} catch (err) {
		console.log(err);
	} finally {
		await client.end();
	}

	return projects;
};
