"use client"
import Logo from "@/app/icons/logo";
import {
  Box,
  Heading,
  Image,
  useMediaQuery
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
export const Landing = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
    const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle click event to toggle collapse
  const handleToggle = () => {
    setIsCollapsed(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Hide Landing when the page is scrolled down
      if (window.scrollY > 0) {
        setIsCollapsed(true);
      }
    };
    console.log('ramvinay scroll created')
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    
        <Box onClick={handleToggle} padding={isMobile? '10px' : undefined} className={`collapsible ${isCollapsed ? 'collapsed' : ''} landing-image`}>
          <Box style={{ width: "400px", color: "white", position: 'relative', top: '100px' }}>
            <Logo color="white" width={isMobile ? '120px' : '330px'} />
            <Heading className="landing-page-heading" fontFamily={"Palatino Linotype"} fontSize={'20px'} mt={isMobile ? '30px' : '70px'}>
              A digital catalyst for  <span style={{ color: "#87B79D" }}>India&apos;s</span> coffee ecosystem
              <Image 
                src="/arrow.gif" // replace with your GIF path
                alt="A descriptive text for the GIF"
                maxW="30px" // limits the width to 300px
                transform="rotate(-45deg)"
                pos={'absolute'}
                right={isMobile ? undefined : '-50px'}
                left={'50px'}
              />
            </Heading>
          </Box>
        </Box>
  );
};