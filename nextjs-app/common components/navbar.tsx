"use client";
import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Text,
  Collapse,
  VStack,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '@/app/icons/logo';
import Link from 'next/link';

type NavbarProps = {
  title: string | undefined;
}
const Navbar: React.FC<NavbarProps> = ({title=undefined}) => {
  const { isOpen, onToggle } = useDisclosure(); // Manage the toggle state for the menu

  return (
    <Box className='nav-bar' bg="white" color="black" pos={'sticky'} top={'0'} borderBottom={'1px solid #dadada'}>
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        p={4}
      >
         <Link href="/" passHref>
          <Text fontSize="xl" fontWeight="bold">
            <Logo width={"89"} height={"40"} color={"#1E1E13"} cursor={'pointer'}/>
          </Text>
        </Link>
        {title && <Link href="#" passHref>
          <Text fontSize="xl" fontWeight="normal" textDecoration={'underline'} textTransform={'uppercase'}>
            {title}
          </Text>
        </Link>}
        <IconButton
          aria-label="Toggle Navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          display={{ base: 'block', md: 'none' }} // Show only on mobile
        />
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          {/* Desktop Menu Items */}
          <Text>About Us</Text>
        </HStack>
      </Flex>
      {/* Mobile Menu */}
      <Collapse in={isOpen}>
        <VStack
          spacing={4}
          bg="white"
          p={4}
          display={{ md: 'none' }} // Hide on desktop
        >
          <Text>About Us</Text>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
