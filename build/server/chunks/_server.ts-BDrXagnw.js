import { promises } from 'fs';
import path from 'path';

const requestsFilePath = path.resolve("src/lib/database/requests.json");
async function getRequests() {
  const data = await promises.readFile(requestsFilePath, "utf-8");
  return JSON.parse(data);
}
async function addRequest(request) {
  try {
    const requests = await getRequests();
    requests.push(request);
    await promises.writeFile(requestsFilePath, JSON.stringify(requests, null, 2));
    console.log("Request added:", request);
    console.log("Current requests:", requests);
  } catch (error) {
    console.error("Error adding request:", error);
    throw error;
  }
}
async function POST({ request }) {
  try {
    const newRequest = await request.json();
    console.log("Received request:", newRequest);
    await addRequest(newRequest);
    return new Response(JSON.stringify({ message: "Request added successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Failed to add request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function GET() {
  return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" }
  });
}

export { GET, POST };
//# sourceMappingURL=_server.ts-BDrXagnw.js.map
