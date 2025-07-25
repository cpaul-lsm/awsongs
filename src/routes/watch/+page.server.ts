import { allRequests } from '$lib/utils/sanity'; // Import both functions
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchFromSanity } from '$lib/server/sanityClient';
import { sanityClient } from '$lib/server/sanityClient';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load: PageServerLoad = async () => {
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

export const actions: Actions = {
  deleteAllRequests: async () => {
    try {
      // First, get all request IDs
      const requests = await fetchFromSanity(allRequests());
      
      if (!requests || requests.length === 0) {
        return fail(400, { message: 'No requests to delete' });
      }

      // Delete all requests using their _id
      const deleteOperations = requests.map((request: any) => ({
        delete: {
          id: request._id
        }
      }));

      // Execute the deletion transaction
      const result = await sanityClient.transaction(deleteOperations).commit();

      console.log(`Successfully deleted ${requests.length} requests`);
      
      return { success: true, message: `Successfully deleted ${requests.length} requests` };
    } catch (err) {
      console.error('Error deleting requests:', err);
      return fail(500, { message: 'Failed to delete requests' });
    }
  }
};