import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'
import * as Icon from "react-bootstrap-icons"
export default function Footer() {
  return (
    <Box  backgroundColor={"white"} zIndex={10} display={"flex"} flexDirection={"column"} width={"100%"} padding={5} height={"35vh"}>
      <Box display={"flex"} flex={1} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
        <VStack alignItems={"flex-start"}>
            <Heading>Thanks for visiting us</Heading>
            <Link to={"#"}><p className='footerText'>Learn more about our Services</p> </Link>
            <Link to={"#"}><p className='footerText'>Learn more about us</p></Link>
            <Link to={"#"}><p className='footerText'>Contact us</p></Link>
            <HStack gap={4}>
                <Icon.Youtube/>
                <Icon.Instagram/>
                <Icon.Tiktok/>
            </HStack>
        </VStack>
        <VStack alignItems={"flex-start"}>
            <Heading>Policy</Heading>
            <Link to={"#"}><p className='footerText'>Terms of Services</p></Link>
            <Link to={"#"}><p className='footerText'>Agreements and Policies</p></Link>
            <Link to={"#"}><p className='footerText'>User data safety</p></Link>
        </VStack>
        <VStack alignItems={"flex-start"}>
            <Heading>For Developers</Heading>
            <Link to={"#"}><p className='footerText'>Take a look at our github</p></Link>
            <Link to={"#"}><p className='footerText'>Learn about our public apis</p></Link>
            <Link to={"#"}><p className='footerText'>QA</p></Link>
        </VStack>
      </Box>
      <Text textAlign={"center"} fontWeight={500} color={"gray.400"}>INTA Copyright 2025</Text>
    </Box>
  )
}
