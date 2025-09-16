// Live content feature temporarily disabled due to type conflicts
// You can re-enable this once Sanity packages are updated
import { sanityClient } from './client';

// Fallback fetch function that doesn't use live updates
export const sanityFetch = async (query: string, params?: Record<string, unknown>) => {
  return sanityClient.fetch(query, params);
};

// Placeholder component for SanityLive
export const SanityLive = () => null;
