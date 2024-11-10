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
import FeaturedArrow from "../app/icons/featured_arrow";
import Logo from "../app/icons/logo";
import { LeftBar } from "./left-bar";
import DiagonaArrow from "../app/icons/arrow-diagonal";
import { storiesFromEstateData } from "@/constants/sample-data";

export default function StoriesFromEstate() {
  const [isMobile] = useMediaQuery("(max-width: 80em)");
  return (
    <Flex id="stories_from_estates_of_india" className="tracked-section" scrollBehavior={'smooth'} w={"100%"} h={"auto"} bg={'#FFFFFF'}>
      <LeftBar width={isMobile ? 8 : 15} color="#204027" />
      <Flex
        w={"100%"}
        p={isMobile ? '0 20px' : "100px"}
        pb={'0'}
        flexDir={"column"}
        borderBottom={"1px solid #dadada"}
      >
        <Heading mt={isMobile ? '40px' : undefined} ml={isMobile ? '15px': undefined} textTransform={'uppercase'} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
        stories from estates of india 
          <FeaturedArrow stroke={"#204027"} />
        </Heading>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"} // 1 columns
          gap={isMobile ? 3 : 16} // Gap between the grid items
          pb={"10px"}
          px={isMobile ? 0 : 1}
          mb={'50px'}
        >
          {storiesFromEstateData?.slice(0,2)?.map((data, index) => (
            <GridItem key={data.id} w={'100%'} margin={'auto'}>
              <Flex
                w={"100%"}
                h={'300px'}
                mb={4}
                bgImage={data.image}
                bgSize="cover"
                bgPosition="center" // Sets image position
                bgRepeat="no-repeat"
              />
              <Text ml={isMobile ? '15px': undefined} mb={'10px'} lineHeight={'30px'} fontSize={'24px'} fontFamily={'Palatino Linotype'}>{data.description}</Text>  
            </GridItem>
          ))}
        </Grid>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"} // 1 columns
          gap={isMobile ? 3 : 16} // Gap between the grid items
          pb={"10px"}
          px={isMobile ? 0 : 1}
        >
          {storiesFromEstateData?.slice(2)?.map((data, index) => (
            <GridItem key={data.id} w={'100%'} margin={'auto'}>
              <Flex
                w={"100%"}
                h={'300px'}
                mb={4}
                bgImage={data.image}
                bgSize="cover"
                bgPosition="center" // Sets image position
                bgRepeat="no-repeat"
              />
              <Text ml={isMobile ? '15px': undefined} mb={'10px'} lineHeight={'30px'} fontSize={'24px'} fontFamily={'Palatino Linotype'}>{data.description}</Text>  
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
          >
            {`View all stories `}
            <DiagonaArrow stroke="black" style={{ marginLeft: "5px" }} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
