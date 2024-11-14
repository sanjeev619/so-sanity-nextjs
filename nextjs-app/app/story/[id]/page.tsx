import Navbar from '@/common components/navbar';
import { Box, ChakraProvider, Flex, Heading, Text } from '@chakra-ui/react';
import {AllStories} from './components/all-stories';
import { postsByArticleTypeQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';

interface ArticlePageProps {
  params: { id: string };
}

const StoryPage: React.FC<ArticlePageProps> = async ({params}) => {
  const { data } = await sanityFetch({ query: postsByArticleTypeQuery(params.id) });
  return <ChakraProvider>
    <div
        className="main"
        style={{ width: "100%", height: "100vh", overflow: "auto" }}
      >
        <Navbar title={undefined} />
        <AllStories featureStoriesData={data} />
      </div>
      
  </ChakraProvider>
};

export default StoryPage;
