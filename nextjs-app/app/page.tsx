import { Box, Button, ChakraProvider, Flex, Heading, Text, useMediaQuery, Image } from "@chakra-ui/react";
import React from "react";
import FeaturedArrow from "./icons/featured_arrow";
import Logo from "./icons/logo";
import DiagonaArrow from "./icons/arrow-diagonal";
import {FeaturedStories} from "@/app/components/FeaturedStoriesComponent";
import PeopleBehind from "@/common components/people-behind-cup-component";
import FirstPrinciple from "@/common components/first-principle-component";
import StoriesFromEstate from "@/common components/stories-from-estate-component";
import StayConnected from "@/common components/stay-connected";
import SoFooterLogo from "./icons/so-coffee-footer";
import MailIcon from "./icons/mail-icon";
import Navbar from "@/common components/navbar";
import '@/styles/globals.css'

export default function Home() {
  const isMobile = false;
  return (
      <div
        className="main"
        style={{ width: "100%", height: "100vh", overflow: "auto" }}
      >
        <Box padding={isMobile? '10px' : undefined} className="landing-image">
          <Box style={{ width: "400px", height: "400px", color: "white", position: 'relative', top: '100px' }}>
            <Logo color="white" width={'330px'} />
            <Heading className="landing-page-heading" fontFamily={"Palatino Linotype"}>
              A digital catalyst for  <span style={{ color: "#87B79D" }}>India&apos;s</span> coffee ecosystem
              <Image 
                src="/arrow.gif" // replace with your GIF path
                alt="A descriptive text for the GIF"
                maxW="30px" // limits the width to 300px
                transform="rotate(-45deg)"
                float={'right'}
              />
            </Heading>
          </Box>
        </Box>
        <Navbar />
        <FeaturedStories />
        <PeopleBehind />
        <FirstPrinciple />
        <StoriesFromEstate />
        <StayConnected />
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
      </div>
  );
}
