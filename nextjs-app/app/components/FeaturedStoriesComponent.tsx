import React from "react";
import { allPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { FeaturedStoriesClient } from "./FeatureStoriesComponentClient";


export const FeaturedStories = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery });
  console.log(data);
  return (
    <FeaturedStoriesClient featureStoriesData={data}/>
  );
};
