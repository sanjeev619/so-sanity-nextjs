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
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/lib/client";
import { useRouter } from 'next/navigation';
import SoFooterLogo from "@/app/icons/so-coffee-footer";
import MailIcon from "@/app/icons/mail-icon";
type ArticleProps ={
  articleData: any;
}

export const ArticleStories: FC<ArticleProps> = ({articleData}) => {
  const [isMobile] = useMediaQuery("(max-width: 80em)");
  const builder = imageUrlBuilder(client);
  const router = useRouter();
  return (
    <>
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
          <Heading textTransform={'uppercase'} ml={isMobile ? '15px' : undefined} justifyContent={isMobile ? 'center' : undefined} mt={isMobile ? '40px' : undefined} mb={'20px'} display={"flex"} fontSize={"24px"} fontWeight={"medium"}>
            {articleData?.articleType}
            <FeaturedArrow stroke={"#87B79D"} />
          </Heading>

          <Text 
            ml={isMobile ? '15px' : undefined} 
            mb={'10px'} lineHeight={'60px'} 
            fontSize={'54px'} 
            fontFamily={'Palatino Linotype'}
          >
              {articleData.excerpt}
          </Text>  
          <Flex alignItems={'center'} mb={'20px'}>
            <Flex alignItems={'center'}>
              <Avatar
              name={articleData.author.firstName+ " " + articleData.author.lastName}
              size={'sm'}
              src={builder.image(articleData.author.picture).url()}
            />
            <Text ml={'10px'}>{articleData.author.firstName+ " " + articleData.author.lastName}</Text>
            </Flex>
          <Text ml={isMobile ? '15px' : '15px'} fontSize={'18px'}>{articleData.readTime} mins read</Text>  
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
                bgImage={builder.image(articleData.coverImage).url()}
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
            onClick={()=>{
              router.push(`/story/${articleData?.articleType}`);
            }}
          >
            {`View all featured stories `}
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
