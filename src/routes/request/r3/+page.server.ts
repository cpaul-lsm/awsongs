import { allRequests } from '$lib/utils/sanity'; // Import both functions
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchFromSanity } from '$lib/server/sanityClient';
import { sanityClient as client } from '$lib/server/sanityClient';

export const load: PageServerLoad = async () => {
  try {
    const requests = await fetchFromSanity(allRequests());
    if (!requests) {
        console.warn("No requests found (or error fetching requests). This might be OK.");
    }

    return { requests }; // Return requests
  } catch (err) {
    console.error("Error in load function:", err);
    if (err.message === 'No requests found') {
        throw error(404, 'No requests found');
    } else {
        throw error(500, 'Error fetching data'); // Generic error
    }
  }
};