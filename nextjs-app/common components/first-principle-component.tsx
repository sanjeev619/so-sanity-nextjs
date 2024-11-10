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
import { firstPrincipleData } from "@/constants/sample-data";

export default function FirstPrinciple() {
  const [isMobile] = useMediaQuery("(max-width: 80em)");
  return (
    <Flex className="tracked-section" id='first_principles_of_coffee' w={"100%"} h={"auto"} bg={'#FFFFFF'}>
      <LeftBar width={isMobile ? 8 : 15} color="#DE3944" />
      <Flex
        w={"100%"}
        p={isMobile? '0 20px' : "100px"}
        pb={'0'}
        flexDir={"column"}
        borderBottom={"1px solid #dadada"}
      >
        <Heading ml={isMobile ? '15px' : undefined} mt={isMobile ? '40px' : undefined} justifyContent={isMobile ? 'center' : undefined} textTransform={'uppercase'} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
          first principles of coffee
          <FeaturedArrow stroke={"#DE3944"} />
        </Heading>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"} // 1 columns
          gap={isMobile ? 3 : 16} // Gap between the grid items
          pb={"10px"}
          px={isMobile ? 0 : 1}
        >
          {firstPrincipleData.map((data, index) => (
            <GridItem key={data.id} w={'100%'} margin={'auto'}>
              <Flex
                w={"100%"}
                h={index==0? '400px':'300px'}
                mb={4}
                bgImage={data.image}
                bgSize="cover"
                bgPosition="center" // Sets image position
                bgRepeat="no-repeat"
              />
              <Text ml={isMobile ? '15px' : undefined} mb={'10px'} lineHeight={'30px'} fontSize={'24px'} fontFamily={'Palatino Linotype'}>{data.description}</Text>  
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
