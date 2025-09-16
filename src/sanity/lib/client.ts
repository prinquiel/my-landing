import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.SANITY_API_VERSION || "2025-01-01",
  useCdn: true, // fast & fine for public content
  token: process.env.SANITY_READ_TOKEN, // optional
});