import Navbar from '@/common components/navbar';
import { ChakraProvider, Box, Flex, Heading, Text } from '@chakra-ui/react';
import  ArticleStories from './components/article-stories-component';
import { postsBySlug } from "@/sanity/lib/queries"; // assuming this is the query you're using
import { sanityFetch } from "@/sanity/lib/live";
import { MoreStories } from './components/MoreStories';
import Footer from '@/app/components/Footer';

// The component is now a Server Component
const ArticlePage = async ({ params }: { params: { id: string } }) => {
  try {
    // Fetch the article data using the slug (id) from Sanity
    const { data } = await sanityFetch({ query: postsBySlug(params.id) });

    if (!data || data.length === 0) {
      return <Text>Article not found</Text>;  // Show a simple message if article is not found
    }

    // Pass the fetched data as props to ArticleStories component
    const articleData = data[0];
    console.log(articleData, 'ramvinay')
    return (
      <ChakraProvider>
        <div
          className="main"
          style={{ width: "100%", height: "100vh", overflow: "auto" }}
        >
          <Navbar />
          <ArticleStories articleData={articleData} />
          <MoreStories storyType={articleData?.articleType}/>    
          <Footer/>
        </div>
      </ChakraProvider>
    );
  } catch (error) {
    console.error('Error fetching article data:', error);
    return <Text>Error loading article</Text>;  // Show a fallback message in case of error
  }
};

export default ArticlePage;
