import fs from 'fs';
import path from 'path';

async function POST({ request }) {
  const { requestId, songPick } = await request.json();
  console.log("Received request to update song:", { requestId, songPick });
  const filePath = path.resolve("src/lib/database/requests.json");
  const requests = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  console.log("Parsed requests:", requests);
  const requestIndex = requests.findIndex((req) => req.id === requestId);
  if (requestIndex !== -1) {
    requests[requestIndex].song = songPick;
    fs.writeFileSync(filePath, JSON.stringify(requests, null, 2));
    console.log("Request updated successfully");
    return new Response(JSON.stringify({ message: "Request updated successfully" }), { status: 200 });
  } else {
    console.error("Request not found in backend");
    return new Response(JSON.stringify({ message: "Request not found" }), { status: 404 });
  }
}

export { POST };
//# sourceMappingURL=_server.ts-CU1tUkat.js.map
