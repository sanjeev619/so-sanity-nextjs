"use client";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { FC, useEffect, useRef, useState } from "react";
import FeaturedArrow from "@/app/icons/featured_arrow";
import Logo from "@/app/icons/logo";
import { LeftBar } from "@/common components/left-bar";
import DiagonaArrow from "@/app/icons/arrow-diagonal";
import { peopleBehindData } from "@/constants/sample-data";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/lib/client";
import { useRouter } from 'next/navigation';

type PeopleBehindTheCupClientProps = {
  peopleBehindTheCup: any
}

export const PeopleBehindTheCupClient:FC<PeopleBehindTheCupClientProps> = ({peopleBehindTheCup}) => {
  const isMobile = false;
  const builder = imageUrlBuilder(client);
  const router = useRouter();
  return (
    <Flex className="tracked-section" id="people_behind_the_cup" w={"100%"} h={"auto"} bg={'#FFFBF6'}>
      <LeftBar width={isMobile ? 8 : 15} color="#204027" />
      <Flex
        w={"100%"}
        p={isMobile ? '0 20px' : "100px"}
        pb={'0'}
        flexDir={"column"}
        borderBottom={"1px solid #dadada"}
      >
        <Heading ml={isMobile ? '15px' : undefined} justifyContent={isMobile ? 'center' : undefined} textTransform={'uppercase'} mt={isMobile ? '40px' : undefined} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
        people behind the cup
          <FeaturedArrow stroke={"#204027"} />
        </Heading>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"} // 1 columns
          gap={isMobile ? 3 : 16} // Gap between the grid items
          pb={"10px"}
          px={isMobile ? 0 : 1}
        >
          {peopleBehindTheCup?.map((story, index) => (
            <GridItem key={story._id} w={'100%'} margin={'auto'} cursor={'pointer'} onClick={()=>{
              router.push(`/article/${story.slug}`);
            }}>
              <Flex
                w={"100%"}
                h={(Math.floor(index/2))%2 === 0 ? (index%2 === 0 ? '400px' : '300px') : (index%2 === 0 ? '300px' : '400px')}
                mb={4}
                bgImage={builder.image(story.coverImage).url() || ""}
                bgSize="cover"
                bgPosition="center" // Sets image position
                bgRepeat="no-repeat"
              />
              <Text ml={isMobile ? '15px' : undefined} mb={'10px'} lineHeight={'30px'} textTransform={'uppercase'} fontWeight={'bold'} fontSize={'16px'}>{story.title}</Text>  
              <Text ml={isMobile ? '15px' : undefined} mb={'10px'} lineHeight={'30px'} fontSize={'24px'} fontFamily={'Palatino Linotype'}>{story.excerpt}</Text>  
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
            p={"20px 40px"}
            onClick={()=>{
              router.push('/story/people behind the cup');
            }}
          >
            {`View all stories `}
            <DiagonaArrow stroke="black" style={{ marginLeft: "5px" }} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
