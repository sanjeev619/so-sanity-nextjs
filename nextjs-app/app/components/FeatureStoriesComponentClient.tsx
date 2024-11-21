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
  useBreakpointValue,
  useMediaQuery
} from "@chakra-ui/react";
import React, { FC } from "react";
import FeaturedArrow from "../icons/featured_arrow";
import Logo from "../icons/logo";
import { LeftBar } from "./left-bar";
import DiagonaArrow from "../icons/arrow-diagonal";
import { featuredStories } from "@/app/constants/sample-data";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/lib/client";
import { useRouter } from 'next/navigation';
type FeaturedStoriesClientProps = {
    featureStoriesData: any
}

export const FeaturedStoriesClient:FC<FeaturedStoriesClientProps> = ({featureStoriesData}) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const builder = imageUrlBuilder(client);
  const router = useRouter();

  return (
    <Flex className="tracked-section" id='FEATURED_STORIES' w={"100%"} h={"auto"} pos={'relative'}>
      <LeftBar color="#87B79D" width={isMobile ? 8 : 15} />
      <Flex
        w={"100%"}
        p={isMobile ? '0 20px' : "100px"}
        pb={'0'}
        flexDir={"column"}
        borderBottom={"1px solid #dadada"}
      >
        <Heading ml={isMobile ? '15px' : undefined} justifyContent={isMobile ? 'center' : undefined} mt={isMobile ? '40px' : undefined} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
          FEATURED STORIES
          <FeaturedArrow stroke={"#87B79D"} />
        </Heading>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"} // 1 columns
          gap={isMobile ? 3 : 16} // Gap between the grid items
          pb={"10px"}
          px={isMobile ? 0 : 1}
        >
          {featureStoriesData?.slice(0,2).map((story, index) => (
            <GridItem key={story._id} bg="white"  onClick={()=>{
              router.push(`/article/${story.slug}`);
            }}
            cursor={'pointer'}>
              <Flex
                w={"100%"}
                h={"400px"}
                mb={4}
                bgImage={builder.image(story.coverImage).url() || ""}
                bgSize="cover"
                bgPosition="center" // Sets image position
                bgRepeat="no-repeat"
              />
              <Text ml={isMobile ? '15px' : undefined} mb={'10px'} lineHeight={'30px'} fontSize={'24px'} fontFamily={'Palatino Linotype'}>{story?.excerpt}</Text>  
              <Text ml={isMobile ? '15px' : undefined} fontSize={'18px'}>{story.readTime} mins read</Text>  
            </GridItem>
          ))}
        </Grid>
        <Flex m={"60px 0"} w={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Button
            background={"white"}
            borderRadius={"0"}
            fontWeight={"normal"}
            border={"1px solid #dadada"}
            p={"20px"}
            onClick={()=>{
              router.push(`/story/featured stories`);
            }}
          >
            {`View all featured stories `}
            <DiagonaArrow stroke="black" style={{ marginLeft: "5px" }} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
