// $lib/server/sanityClient.ts
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID} from '$env/static/public';
import { SANITY_WRITE_TOKEN } from '$env/static/private';
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false,
	apiVersion: '2025-01-20',
	token: SANITY_WRITE_TOKEN
});

export async function fetchFromSanity(query: string) {
	try {
		const data = await sanityClient.fetch(query);
		return data;
	} catch (error) {
		console.error('Error fetching from Sanity:', error);
		throw error;
	}
}