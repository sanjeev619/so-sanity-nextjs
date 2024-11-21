import type { Metadata } from "next";
import Head from "next/head";
import { notFound } from "next/navigation";

import { sanityFetch } from "@/sanity/lib/live";
import { getPageQuery, pagesSlugs } from "@/sanity/lib/queries";
import Navbar from "@/app/components/navbar";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import ArticleStories from "@/app/components/article-stories-component";
import { postsBySlug } from "@/sanity/lib/queries"; // Query for Sanity
import { MoreStories } from "@/app/components/MoreStories";
import Footer from "@/app/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  
  const { data } = await sanityFetch({
    query: pagesSlugs,
    perspective: "published",
    stega: false,
  });
  console.log(data, 'ramvinay data')
  return data;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: postsBySlug(params.slug),
    params,
    stega: false,
  });

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata;
}

export default async function ArticlePage(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({
    query: postsBySlug(params.slug),
    params,
    stega: false,
  });
console.log(data, 'ramvinay data')
  if (!(data && data?.length>0 && data[0]?._id)) {
    return notFound();
  }
  const articleData = data[0];

  return (
    <ChakraProvider>
      <div
        className="main"
        style={{ width: "100%", height: "100vh", overflow: "auto" }}
      >
        <Head>
          <title>{'Article Page'}</title>
        </Head>
        <Navbar title={""} />
        <ArticleStories articleData={articleData} />
        <MoreStories storyType={articleData?.articleType} />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
