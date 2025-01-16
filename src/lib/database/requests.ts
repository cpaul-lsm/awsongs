import { promises as fs } from 'fs';
import path from 'path';

const requestsFilePath = path.resolve('src/lib/database/requests.json');

export async function getRequests() {
    const data = await fs.readFile(requestsFilePath, 'utf-8');
    return JSON.parse(data);
}

export async function addRequest(request) {
    try {
        const requests = await getRequests();
        requests.push(request);
        await fs.writeFile(requestsFilePath, JSON.stringify(requests, null, 2));
        console.log('Request added:', request);
        console.log('Current requests:', requests);
    } catch (error) {
        console.error('Error adding request:', error);
        throw error;
    }
}