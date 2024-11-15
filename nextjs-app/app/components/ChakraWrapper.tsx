"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function ChakraWrapper({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return isClient ? <ChakraProvider>{children}</ChakraProvider> : <></>;
}