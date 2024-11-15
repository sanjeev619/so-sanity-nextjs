import React from "react";
import { allPostsQuery, postsByArticleTypeQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { MoreStoriesClient } from "./MoreStoriesClient";


export const MoreStories = async ({storyType}) => {
  const { data } = await sanityFetch({ query: postsByArticleTypeQuery(storyType) });
  console.log(data, 'ramvinay data')
  return (
    <MoreStoriesClient storiesData={data}/>
  );
};
