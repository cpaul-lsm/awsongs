export function allSongs() {
  return `*[_type == "songs" 
  && public == true
  && requested == false
  && "General" in category
] 
| order(title asc) {
  title,
  artist
}`;
}

export function allRequests() {
  return `*[_type == "requests"]{
   id,
  firstname,
  comments,
  requestedAt,
  song,
   _id // Include _id for keys in Svelte components

  }`;
}