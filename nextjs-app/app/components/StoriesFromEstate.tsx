import React from "react";
import { allPostsQuery, postsByArticleTypeQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { FeaturedStoriesClient } from "./FeatureStoriesComponentClient";
import FirstPrinciple from "./FirstPrinciplesOfCoffeeClient";
import StoriesFromEstateComponent from "./StoriesFromEstateClient";


export const StoriesFromEstate = async () => {
  const { data } = await sanityFetch({ query: postsByArticleTypeQuery("stories from estates of india") });
  return (
    <StoriesFromEstateComponent storyData={data}/>
  );
};
