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
import { Landing } from "@/common components/landing-page";

export default function Home() {
  const isMobile = false;
  return (
      <div
        className="main"
        style={{ width: "100%", height: "100vh", overflow: "auto" }}
      >
        <Landing/>
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
