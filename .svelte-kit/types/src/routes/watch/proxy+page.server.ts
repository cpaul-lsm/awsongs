// @ts-nocheck
import { allRequests } from '$lib/utils/sanity'; // Import both functions
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchFromSanity } from '$lib/server/sanityClient';

export const load = async () => {
  try {
    const requests = await fetchFromSanity(allRequests()); // Fetch requests

    // Check if requests were fetched.  Handle as needed.
    if (!requests) {
        console.warn("No requests found (or error fetching requests). This might be OK.");
    }

    return { requests }; // Return both songs and requests
  } catch (err) {
    console.error("Error in load function:", err);
    // Differentiate error handling if needed
    if (err.message === 'No songs found') {
        throw error(404, 'No songs found');
    } else {
        throw error(500, 'Error fetching data'); // Generic error
    }
  }
};;null as any as PageServerLoad;