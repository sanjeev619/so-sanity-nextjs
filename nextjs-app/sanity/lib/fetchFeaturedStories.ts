// lib/fetchFeaturedStories.ts (Server function)
import { sanityFetch } from "@/sanity/lib/live";
import { allPostsQuery } from "@/sanity/lib/queries";

export async function fetchFeaturedStories() {
  return await sanityFetch({ query: allPostsQuery });
}
