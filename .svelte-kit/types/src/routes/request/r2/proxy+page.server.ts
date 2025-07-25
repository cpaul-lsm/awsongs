// @ts-nocheck
// /r2/+page.server.ts
import { allSongs, allRequests } from '$lib/utils/sanity';
import type { PageServerLoad, Actions } from './$types';
import { error, fail } from '@sveltejs/kit';
import { fetchFromSanity } from '$lib/server/sanityClient';
import { sanityClient as client } from '$lib/server/sanityClient';

export const load = async () => {
    try {
        // Check if environment variables are configured
        if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_WRITE_TOKEN) {
            throw error(500, 'Sanity configuration missing. Please check your .env file.');
        }

        const songs = await fetchFromSanity(allSongs());
        const requests = await fetchFromSanity(allRequests());

        if (!songs || songs.length === 0) {
            throw error(404, 'No songs found');
        }

        return {
            songs,
            requests: requests || []
        };
    } catch (err) {
        if (err instanceof Error) {
            throw error(500, `Error fetching data: ${err.message}`);
        }
        throw error(500, 'Error fetching data');
    }
};

export const actions = {
    default: async ({ request }: import('./$types').RequestEvent) => {
        try {
            const formData = await request.formData();
            const rId = formData.get('rId')?.toString();
            const songPick = formData.get('songchecked')?.toString();



            if (!rId || !songPick) {
                return fail(400, { message: 'Missing rId or song selection' });
            }

            const requests = await fetchFromSanity(allRequests());

            const matchingRequest = requests.find((req: any) => String(req.id) === rId);

            if (!matchingRequest) {
                return fail(404, { message: 'Request not found for this rId' });
            }

            const result = await client
                .patch(matchingRequest._id)
                .set({ 
                    song: songPick
                })
                .commit();

            return { 
                success: true, 
                message: 'Song added to request successfully',
                rId: rId
            };
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            return fail(500, { 
                message: `Failed to update request: ${errorMessage}`
            });
        }
    }
};;null as any as PageServerLoad;;null as any as Actions;