// @ts-nocheck
import { allRequests } from '$lib/utils/sanity'; // Import both functions
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchFromSanity } from '$lib/server/sanityClient';
import { sanityClient } from '$lib/server/sanityClient';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

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
};

export const actions = {
  clearAllRequests: async () => {
    try {
      // First, get all request IDs
      const requests = await fetchFromSanity(allRequests());
      
      if (!requests || requests.length === 0) {
        return fail(400, { message: 'No requests to clear' });
      }

      // Update all requests to set public field to false
      const updateOperations = requests.map((request: any) => ({
        patch: {
          id: request._id,
          set: {
            public: false
          }
        }
      }));

      // Execute the update transaction
      const result = await sanityClient.transaction(updateOperations).commit();

      console.log(`Successfully cleared ${requests.length} requests`);
      
      return { success: true, message: `Successfully cleared ${requests.length} requests` };
    } catch (err) {
      console.error('Error clearing requests:', err);
      return fail(500, { message: 'Failed to clear requests' });
    }
  }
};;null as any as PageServerLoad;;null as any as Actions;