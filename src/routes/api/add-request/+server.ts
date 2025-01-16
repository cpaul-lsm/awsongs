import { addRequest } from '$lib/database/requests';

export async function POST({ request }) {
    try {
        const newRequest = await request.json();
        console.log('Received request:', newRequest); // Log the received request
        await addRequest(newRequest); // Ensure this function updates the requests array

        return new Response(JSON.stringify({ message: 'Request added successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        if (error instanceof SyntaxError) {
            return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        console.error('Error processing request:', error);
        return new Response(JSON.stringify({ error: 'Failed to add request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function GET() {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
    });
}