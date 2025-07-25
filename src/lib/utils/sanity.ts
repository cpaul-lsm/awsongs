export function allSongs() {
  return `*[_type == "songs" 
  && request == true
  && "General" in category
] 
| order(title asc) {
  title,
  artist
}`;
}

export function allRequests() {
  return `*[_type == "requests"
  && public == true
  ]{
   id,
  firstname,
  comments,
  requestedAt,
  song,
   _id,
   public
  }`;
}