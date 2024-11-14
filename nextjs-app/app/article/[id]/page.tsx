import Navbar from '@/common components/navbar';
import { Box, ChakraProvider, Flex, Heading, Text } from '@chakra-ui/react';
import {ArticleStories} from './components/article-stories-component';
import { allPostsQuery, postsBySlug } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage: React.FC<ArticlePageProps> = async ({params}) => {
  const { data } = await sanityFetch({ query: postsBySlug(params.id) });
  return <ChakraProvider>
    <div
        className="main"
        style={{ width: "100%", height: "100vh", overflow: "auto" }}
      >
        <Navbar title={data[0]?.articleType}/>
        <ArticleStories articleData={data[0]}/>
      </div>
      
  </ChakraProvider>
};

export default ArticlePage;
