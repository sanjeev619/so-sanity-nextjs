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
import React, { FC } from "react";
import FeaturedArrow from "../icons/featured_arrow";
import Logo from "../icons/logo";
import { LeftBar } from "../../common components/left-bar";
import DiagonaArrow from "../icons/arrow-diagonal";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/navigation";

type StoryDataType = {
  id: string;
  coverImage: any;
  excerpt: string;
};

type Props = {
  storyData: StoryDataType[];
};

export default function StoriesFromEstateComponent({ storyData }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 80em)");
  const builder = imageUrlBuilder(client);
  const router = useRouter();

  const imageUrl = (source: any) => builder.image(source).url();

  return (
    <Flex
      id="stories_from_estates_of_india"
      className="tracked-section"
      scrollBehavior={"smooth"}
      w={"100%"}
      h={"auto"}
      bg={"#FFFFFF"}
    >
      <LeftBar width={isMobile ? 8 : 15} color="#204027" />
      <Flex
        w={"100%"}
        p={isMobile ? "0 20px" : "100px"}
        pb={"0"}
        flexDir={"column"}
        borderBottom={"1px solid #dadada"}
      >
        <Heading
          mt={isMobile ? "40px" : undefined}
          ml={isMobile ? "15px" : undefined}
          textTransform={"uppercase"}
          mb={"20px"}
          display={"flex"}
          fontSize={"24px"}
          fontWeight={"medium"}
        >
          stories from estates of india
          <FeaturedArrow stroke={"#204027"} />
        </Heading>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
          gap={isMobile ? 3 : 16}
          pb={"10px"}
          px={isMobile ? 0 : 1}
          mb={"50px"}
          key={'storiesfromestate-3'}
        >
          {storyData?.slice(0, 2)?.map((data) => (
            <GridItem key={data?.id+"storyItem"} w={"100%"} margin={"auto"} cursor={'pointer'} onClick={()=>{
              router.push(`/article/${data.slug}`);
            }}>
              <Flex
                w={"100%"}
                h={"300px"}
                mb={4}
                bgImage={`url(${imageUrl(data.coverImage)})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
              />
              <Text
                ml={isMobile ? "15px" : undefined}
                mb={"10px"}
                lineHeight={"30px"}
                fontSize={"24px"}
                fontFamily={"Palatino Linotype"}
              >
                {data.excerpt}
              </Text>
            </GridItem>
          ))}
        </Grid>
        <Grid
          templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
          gap={isMobile ? 3 : 16}
          pb={"10px"}
          px={isMobile ? 0 : 1}
          key={'storiesfromEstate'}
        >
          {storyData?.slice(2)?.map((data) => (
            <GridItem key={data.id} w={"100%"} margin={"auto"}>
              <Flex
                w={"100%"}
                h={"300px"}
                mb={4}
                bgImage={`url(${imageUrl(data.coverImage)})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
              />
              <Text
                ml={isMobile ? "15px" : undefined}
                mb={"10px"}
                lineHeight={"30px"}
                fontSize={"24px"}
                fontFamily={"Palatino Linotype"}
              >
                {data.excerpt}
              </Text>
            </GridItem>
          ))}
        </Grid>
        <Flex
          m={"60px 0"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            background={"white"}
            borderRadius={"0"}
            fontWeight={"normal"}
            border={"1px solid #dadada"}
            p={"20px 40px"}
            onClick={() => {
              router.push(`/story/stories from estates of india`);
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
