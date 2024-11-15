import { Box, Button, ChakraProvider, Flex, Heading, Text, useMediaQuery, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "./icons/logo";
import {FeaturedStories} from "@/app/components/FeaturedStoriesComponent";
import StayConnected from "@/common components/stay-connected";
import Navbar from "@/common components/navbar";
import '@/styles/globals.css'
import { PeopleBehindTheCup } from "./components/PeopleBehindTheCupComponent";
import Footer from "./components/Footer";
import { FirstPrinciplesOfCoffee } from "./components/FirstPrinciplesOfCoffee";
import { StoriesFromEstate } from "./components/StoriesFromEstate";

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
                pos={'absolute'}
                right={'-50px'}
              />
            </Heading>
          </Box>
        </Box>
        <Navbar />
        <FeaturedStories />
        <PeopleBehindTheCup/>
        <FirstPrinciplesOfCoffee />
        <StoriesFromEstate />
        <StayConnected />
        <Footer/>
      </div>
  );
}
