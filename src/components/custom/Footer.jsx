import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'
import * as Icon from "react-bootstrap-icons"
export default function Footer() {
  return (
    <Box  backgroundColor={"white"} zIndex={10} display={"flex"} flexDirection={"column"} width={"100%"} padding={5} height={"35vh"}>
      <Box display={"flex"} flex={1} justifyContent={"space-between"}  width={"100%"}>
        <VStack alignItems={"flex-start"}>
            <Heading>Obrigado por visitar-nos</Heading>
            <Link to={"#"}><p className='footerText'>Contacte-nos</p></Link>
            <HStack gap={4}>
                <Icon.Youtube/>
                <Icon.Instagram/>
                <Icon.Tiktok/>
            </HStack>
        </VStack>
        <VStack alignItems={"flex-start"}>
            <Heading>Para administradores</Heading>
            <Link to={"/admin"}><p className='footerText'>pagina admin</p></Link>
        </VStack>
      </Box>
      <Text textAlign={"center"} fontWeight={500} color={"gray.400"}>INTA Copyright 2025</Text>
    </Box>
  )
}
