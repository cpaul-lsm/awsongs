// src/routes/request/+page.server.ts
import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { sanityClient } from '$lib/server/sanityClient';

export const actions: Actions = {
  async default({ request }) {
    console.log('Action triggered!');
    const formData = await request.formData();
    const firstname = formData.get('firstname')?.toString() || '';
    const comments = formData.get('comments')?.toString() || '';
    const requestIdString = formData.get('requestId')?.toString() || '';
    const requestId = parseInt(requestIdString, 10); // Convert to number
    const todaysDate = new Date().toISOString();

    console.log('Received Form Data:', { firstname, comments, requestId, todaysDate });

    if (!firstname) {
      console.log('Validation failed: First name is required.');
      return fail(400, { error: 'First name is required.' });
    }

    const requestDetails = {
      _type: 'requests',
      id: requestId,
      requestedAt: todaysDate,
      firstname,
      comments
    };

    try {
      const response = await sanityClient.create(requestDetails);
      console.log('Sanity Create Response:', response);
      return { success: true }; // Simplified success response
    } catch (error) {
      console.error('Sanity Error:', error);
      return fail(500, { error: 'Failed to submit. Check server logs.' });
    }
  }
};