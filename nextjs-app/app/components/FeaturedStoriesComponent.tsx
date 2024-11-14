import React from "react";
import { allPostsQuery, postsByArticleTypeQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { FeaturedStoriesClient } from "./FeatureStoriesComponentClient";


export const FeaturedStories = async () => {
  const { data } = await sanityFetch({ query: postsByArticleTypeQuery("featured stories") });
  return (
    <FeaturedStoriesClient featureStoriesData={data}/>
  );
};
