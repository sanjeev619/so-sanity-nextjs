"use client"
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import React, { FC } from "react";
import { featuredStories } from "@/constants/sample-data";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/lib/client";
import { useRouter } from 'next/navigation';
type FeaturedStoriesClientProps = {
    storiesData: any
}

export const MoreStoriesClient:FC<FeaturedStoriesClientProps> = ({storiesData}) => {
  const isMobile = false;
  const builder = imageUrlBuilder(client);
  const router = useRouter();
  return (
    <Flex border={'none'} w={"100%"} h={"auto"}>
      <Flex
        w={"100%"}
        p={isMobile ? '0 20px' : "80px 270px"}
        border={'none'}
        flexDir={"column"}
      >
        <Heading textTransform={'uppercase'} ml={isMobile ? '15px' : undefined} justifyContent={isMobile ? 'center' : undefined} mt={isMobile ? '40px' : undefined} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
          More from {storiesData[0]?.articleType}
        </Heading>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"} // 1 columns
          gap={isMobile ? 3 : 3} // Gap between the grid items
          pb={"10px"}
          px={isMobile ? 0 : 1}
        >
          {storiesData?.slice(0,3).map((story, index) => (
            <GridItem key={story._id} bg="white"  onClick={()=>{
              router.push(`/article/${story.slug}`);
            }}
            cursor={'pointer'}>
              <Flex
                w={"100%"}
                h={"300px"}
                mb={4}
                bgImage={builder.image(story.coverImage).url() || ""}
                bgSize="cover"
                bgPosition="center" // Sets image position
                bgRepeat="no-repeat"
              />
              <Text ml={isMobile ? '15px' : undefined} mb={'10px'} lineHeight={'30px'} fontSize={'24px'} fontFamily={'Palatino Linotype'}>{story?.excerpt}</Text>  
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
