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
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/lib/client";
import { useRouter } from 'next/navigation';
import Footer from "@/app/components/Footer";
import SoFooterLogo from "@/app/icons/so-coffee-footer";
import MailIcon from "@/app/icons/mail-icon";
type AllStoriesProps = {
  featureStoriesData: any;
}

export const AllStories:FC<AllStoriesProps> = ({featureStoriesData})=> {
  const [isMobile] = useMediaQuery("(max-width: 80em)");
  const builder = imageUrlBuilder(client);
  const router = useRouter();
  return (
    <>
    <Flex w={"100%"} h={"auto"}>
      <LeftBar color="#87B79D" width={isMobile ? 8 : 15} />
      <Flex
        w={"100%"}
        p={isMobile ? '0 20px' : "60px 30px"}
        pb={'0'}
        flexDir={"column"}
        borderBottom={"1px solid #dadada"}
      >
        <Box mb={10}>
          <Heading textTransform={'uppercase'} ml={isMobile ? '15px' : undefined} justifyContent={isMobile ? 'center' : undefined} mt={isMobile ? '40px' : undefined} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
            {featureStoriesData[0]?.articleType}
            <FeaturedArrow stroke={"#87B79D"} />
          </Heading>
          <Text fontSize={'18px'}>Check out the most inspiring stories from the worlf of coffee curated for you in form of featured stories and some more description to be added.</Text>
        </Box>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"} // 1 columns
          gap={isMobile ? 3 : 16} // Gap between the grid items
          pb={"10px"}
          px={isMobile ? 0 : 1}
        >
        {featureStoriesData?.map((story, index) => (
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
          >
            {`View all ${featureStoriesData[0]?.articleType} `}
            <DiagonaArrow stroke="black" style={{ marginLeft: "5px" }} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDir={'column'} justifyContent={'flex-start'} p={'130px 130px 10px 130px'} w={'100%'} bg={'#204027'}>
          <Flex mb={'100px'} w={'100%'} alignItems={isMobile ?'center': undefined} justifyContent={isMobile ? 'center' : 'space-between'} flexDir={isMobile ? 'column' : undefined}>
            <SoFooterLogo />
            <Flex w={'60%'} flexDir={'column'} alignItems={'flex-end'}>
              <Text mb={'20px'} lineHeight={'30px'} textAlign={'end'} color={'white'}>
                SoCoffee is a digital catalyst for India’s coffee ecosystem, with the objective of addressing the farm-to-cup gap through a digital first approach. By leveraging content and digitization, SoCoffee aims to connect growers, businesses, and consumers in a seamless, scalable way. For a start, our platform brings inspiring stories, valuable information, and resources to empower every stakeholder in the coffee value chain.
              </Text>
              <Button
                background={"none"}
                color={'white'}
                borderRadius={"0"}
                fontWeight={"normal"}
                border={"1px solid #dadada"}
                p={"20px 40px"}
                w={'300px'}
              >
                {`Know more about us `}
                <DiagonaArrow stroke="white" style={{ marginLeft: "5px" }} />
              </Button>
            </Flex>
          </Flex>
          <Flex color={'white'} flexDir={'column'}>
            <Text mb={'10px'}>Let’s chat over a cup of coffee? Please write to:</Text>
            <Flex><MailIcon style={{ marginRight: '10px' }} />hello@socoffee.club</Flex>
          </Flex>
        </Flex> 
</>
  );
}
