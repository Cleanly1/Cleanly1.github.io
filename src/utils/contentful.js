const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export async function fetchEntriesByType(type) {
  const entries = await client.getEntries({
    content_type: type,
  });

  return entries.items;
}

export async function fetchFeaturedProjects() {
  const entries = await client.getEntries({
    content_type: "project",
    order: "sys.createdAt",
    include: 2,
  });

  return entries.items;
}

export async function fetchProjectsByID(ID) {
  const entries = await client.getEntry(ID).then((entry) => {
    return entry.fields;
  });

  return entries;
}
