import React from "react";
import { allPostsQuery, postsByArticleTypeQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { PeopleBehindTheCupClient } from "./PeopleBehindTheCupClient";


export const PeopleBehindTheCup = async () => {
  const { data } = await sanityFetch({ query: postsByArticleTypeQuery("people behind the cup") });
  return (
    <PeopleBehindTheCupClient peopleBehindTheCup={data}/>
  );
};
