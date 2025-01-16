import { getRequests } from '$lib/database/requests';

export async function get() {
    try {
        const requests = await getRequests();
        return {
            status: 200,
            body: requests
        };
    } catch (error) {
        console.error('Error fetching requests:', error);
        return {
            status: 500,
            body: { error: 'Failed to fetch requests' }
        };
    }
}
