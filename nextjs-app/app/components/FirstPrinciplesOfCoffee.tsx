import React from "react";
import { allPostsQuery, postsByArticleTypeQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { FeaturedStoriesClient } from "./FeatureStoriesComponentClient";
import FirstPrinciple from "./FirstPrinciplesOfCoffeeClient";


export const FirstPrinciplesOfCoffee = async () => {
  const { data } = await sanityFetch({ query: postsByArticleTypeQuery("first principles of coffee") });
  return (
    <FirstPrinciple firstPrincipleData={data}/>
  );
};
