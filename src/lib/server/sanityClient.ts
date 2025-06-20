// src/lib/server/sanityClient.ts
import { createClient } from '@sanity/client';
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_WRITE_TOKEN } from '$env/static/private';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: SANITY_WRITE_TOKEN
});

export async function fetchFromSanity(query: string) {
  try {
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    throw error;
  }
}