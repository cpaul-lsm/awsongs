// @ts-nocheck
// src/routes/request/+page.server.ts
import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { sanityClient } from '$lib/server/sanityClient';

export const actions = {
  async default({ request }) {
    console.log('Action triggered!');
    const formData = await request.formData();
    const firstname = formData.get('firstname')?.toString() || '';
    const comments = formData.get('comments')?.toString() || '';
    const requestIdString = formData.get('requestId')?.toString() || '';
    const requestId = parseInt(requestIdString, 10); // Convert to number
    const todaysDate = new Date().toISOString();
    

    if (!firstname) {
      return fail(400, { error: 'First name is required.' });
    }

    const requestDetails = {
      _type: 'requests',
      id: requestId,
      requestedAt: todaysDate,
      firstname,
      comments,
      public: true
    };

    try {
      const response = await sanityClient.create(requestDetails);
      return { success: true }; // Simplified success response
    } catch (error) {
      return fail(500, { error: 'Failed to submit. Check server logs.' });
    }
  }
};;null as any as Actions;