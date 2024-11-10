"use client";
import {
  Avatar,
  Box,
  Button,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { FC, useEffect, useRef, useState } from "react";
import FeaturedArrow from "@/app/icons/featured_arrow";
import Logo from "@/app/icons/logo";
import { LeftBar } from "@/common components/left-bar";
import DiagonaArrow from "@/app/icons/arrow-diagonal";
import { articleStories, featuredStories } from "@/constants/sample-data";

export default function ArticleStories() {
  const [isMobile] = useMediaQuery("(max-width: 80em)");
  return (
    <Flex id='FEATURED_STORIES' w={"100%"} h={"auto"}>
      {/* <LeftBar color="#87B79D" width={isMobile ? 8 : 15} /> */}
      <Flex
        w={"100%"}
        p={isMobile ? '0 20px' : "100px 30px"}
        pb={'0'}
        flexDir={"column"}
        borderBottom={"1px solid #dadada"}
      >
        <Box px={16}>
          <Heading ml={isMobile ? '15px' : undefined} justifyContent={isMobile ? 'center' : undefined} mt={isMobile ? '40px' : undefined} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
            {articleStories.articleType}
            <FeaturedArrow stroke={"#87B79D"} />
          </Heading>

          <Text 
            ml={isMobile ? '15px' : undefined} 
            mb={'10px'} lineHeight={'60px'} 
            fontSize={'54px'} 
            fontFamily={'Palatino Linotype'}
          >
              {articleStories.storyTitle}
          </Text>  
          <Flex alignItems={'center'} mb={'20px'}>
            <Flex alignItems={'center'}>
              <Avatar
              name={articleStories.author}
              size={'sm'}
              src={articleStories.authorAvatar}
            />
            <Text ml={'10px'}>{articleStories.author}</Text>
            </Flex>
          <Text ml={isMobile ? '15px' : '15px'} fontSize={'18px'}>{articleStories.storyTime} read</Text>  
          </Flex>
        </Box>
        
        <Grid
          templateColumns={"repeat(1, 1fr)"} // 1 columns
          gap={isMobile ? 3 : 16} // Gap between the grid items
          pb={"10px"}
          px={isMobile ? 0 : 1}
        >
            <GridItem bg="white" pos={'relative'}>
              <Flex
                w={"100%"}
                h={"800px"}
                mb={4}
                bgImage={articleStories.images[0].url}
                bgSize="cover"
                bgPosition="center" // Sets image position
                bgRepeat="no-repeat"
              />
              <Flex w={'100%'}  pos={'relative'} bottom={'100px'}>
                <Flex w={'80%'} m={'0 auto'} maxH={'570px'} bg={'white'} >
                  <LeftBar width={isMobile ? 8 : 15} color="#87B79D"/>
                  <Flex
                    w={"100%"}
                    pb={'0'}
                    flexDir={"column"}
                    borderBottom={"1px solid #dadada"}
                    p={8}
                  >
                    <Heading textTransform={'uppercase'} ml={'15px'} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
                      profile overview
                    </Heading>
                    <Flex w={"100%"} alignItems={"center"} justifyContent={"center"}>
                      <Text ml={'15px'}>{articleStories.profileOverview}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
        </Grid>
        
        <Flex m={"60px 0"} w={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Button
            background={"white"}
            borderRadius={"0"}
            fontWeight={"normal"}
            border={"1px solid #dadada"}
            p={"20px"}
          >
            {`View all featured stories `}
            <DiagonaArrow stroke="black" style={{ marginLeft: "5px" }} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
