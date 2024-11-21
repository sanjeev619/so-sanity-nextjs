import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

const InstagramEmbed = ({ embedHtml }) => {
  useEffect(() => {
    // Ensure Instagram's embed script is loaded after rendering the HTML
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Clean up script tag on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box>
      <Box w={'100%'} dangerouslySetInnerHTML={{ __html: embedHtml }} />
    </Box>
  );
};

export default InstagramEmbed;
