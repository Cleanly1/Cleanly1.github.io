import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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

export async function fetchEntryByID(ID) {
  const entries = await client.getEntry(ID).then((entry) => {
    return entry.fields;
  });

  return entries;
}

export async function fetchProjectsBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "project",
    "fields.slug[in]": slug,
  });

  return entries;
}

export function richTextToReact(text, options) {
  return documentToReactComponents(text, options);
}

export async function fetchPageBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "page",
    "fields.slug[in]": slug,
  });

  return entries;
}
