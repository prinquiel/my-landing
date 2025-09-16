// lib/cms.ts
import { sanityClient } from "../sanity/lib/client";
import { heroQuery, testimonialsQuery } from "../sanity/lib/queries";

export async function getHero() {
  try { return await sanityClient.fetch(heroQuery); }
  catch { return null; }
}

export async function getTestimonials() {
  try { return await sanityClient.fetch(testimonialsQuery); }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch { return [] as any[]; }
}