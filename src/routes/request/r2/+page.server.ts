// /r2/+page.server.ts
import { allSongs, allRequests } from '$lib/utils/sanity';
import type { PageServerLoad, Actions } from './$types';
import { error, fail } from '@sveltejs/kit';
import { fetchFromSanity } from '$lib/server/sanityClient';
import { sanityClient as client } from '$lib/server/sanityClient';

export const load: PageServerLoad = async () => {
    try {
        // Check if environment variables are configured
        if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_WRITE_TOKEN) {
            console.error('Missing Sanity environment variables');
            throw error(500, 'Sanity configuration missing. Please check your .env file.');
        }

        const songs = await fetchFromSanity(allSongs());
        const requests = await fetchFromSanity(allRequests());
        console.log('Loaded requests:', requests.map((r: any) => ({ id: r.id, _id: r._id })));

        if (!songs || songs.length === 0) {
            throw error(404, 'No songs found');
        }

        return {
            songs,
            requests: requests || []
        };
    } catch (err) {
        console.error('Error in load function:', err);
        if (err instanceof Error) {
            throw error(500, `Error fetching data: ${err.message}`);
        }
        throw error(500, 'Error fetching data');
    }
};

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const rId = formData.get('rId')?.toString();
            const songPick = formData.get('songchecked')?.toString();

            console.log('Action received:', { rId, songPick });

            if (!rId || !songPick) {
                return fail(400, { message: 'Missing rId or song selection' });
            }

            const requests = await fetchFromSanity(allRequests());
            console.log('All requests in action:', requests.map((r: any) => ({ id: r.id, _id: r._id, song: r.song })));

            const matchingRequest = requests.find((req: any) => String(req.id) === rId);
            console.log('Matching request:', matchingRequest);

            if (!matchingRequest) {
                console.error('No matching request found for rId:', rId);
                return fail(404, { message: 'Request not found for this rId' });
            }

            console.log('Attempting patch on _id:', matchingRequest._id);
            const result = await client
                .patch(matchingRequest._id)
                .set({ 
                    song: songPick // Use 'song' to match schema
                })
                .commit();

            console.log('Patch result:', result);

            return { 
                success: true, 
                message: 'Song added to request successfully',
                rId: rId
            };
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            const errorDetails = (err as any)?.details || '';
            console.error('Error updating request:', errorMessage, errorDetails);
            return fail(500, { 
                message: `Failed to update request: ${errorMessage}`
            });
        }
    }
};