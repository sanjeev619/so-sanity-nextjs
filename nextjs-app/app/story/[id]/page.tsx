"use client";
import Navbar from '@/common components/navbar';
import { Box, ChakraProvider, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import AllStories from './components/all-stories';

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage: React.FC<ArticlePageProps> = ({params}) => {
  
  return <ChakraProvider>
    <div
        className="main"
        style={{ width: "100%", height: "100vh", overflow: "auto" }}
      >
        <Navbar />
        <AllStories/>
      </div>
      
  </ChakraProvider>
};

export default ArticlePage;
