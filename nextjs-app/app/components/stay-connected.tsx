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
import FeaturedArrow from "../icons/featured_arrow";
import Logo from "../icons/logo";
import { LeftBar } from "./left-bar";
import DiagonaArrow from "../icons/arrow-diagonal";
import { peopleBehindData } from "@/app/constants/sample-data";
import SoLogo from "@/app/icons/so-logo";
import WhatsappLogo from "@/app/icons/whatsapp-icon";

export default function StayConnected() {
  const [isMobile] = useMediaQuery("(max-width: 80em)");
  return (
    <Flex w={"100%"} h={"auto"} bg={'#FFFBF6'}>
      <Flex
        w={"100%"}
        p={isMobile ? '100px 0' : "100px"}
        flexDir={"column"}
        borderBottom={"1px solid #dadada"}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flex gap={9} p={isMobile ? 0 : 16} flexDir={'column'} w={isMobile ? '100%' : '70%'} justifyContent={'center'} alignItems={'center'}>
        <SoLogo width={'164'} height={'93'}/>
        <Heading fontSize={'24px'} fontFamily={'Brocha W00 Regular'}>Let's stay connected?</Heading>
        <Text textAlign={'center'} fontFamily={'Palatino Linotype'}>Join our WhatsApp community to get the latest coffee stories, exclusive updates, and special offers delivered straight to your phone. Be the first to know about new discoveries in the coffee world and deepen your coffee knowledge with us.</Text>
        <Button
            background={"white"}
            borderRadius={"0"}
            fontWeight={"normal"}
            border={"1px solid #dadada"}
            p={"20px"}
          >
            <WhatsappLogo style={{ marginRight: "5px" }}/>
            {`Sign Up on WhatsApp`}
            <DiagonaArrow stroke="black" style={{ marginLeft: "5px" }} />
          </Button>
          </Flex>
      </Flex>
    </Flex>
  );
}
