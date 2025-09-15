import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
export default function Newslatter() {
  return (
    <VStack width={"100%"} backgroundColor={"#4646f8e1"} justifyContent={"center"} alignItems={"center"} height={"70vh"} padding={10}>
        <Box gap={5} display={"flex"} flexDirection={"column"} justifyItems={"center"} alignItems={"center"} maxWidth={500}>
           <Heading color={"white"} fontSize={27}>Newslatter</Heading>
        <Text color={"white"} textAlign={"center"}>Subscreva-se Ja na nossa newslatter e receba noticias de ultima hoja Sobre
            as tuas celebridades favoritas
        </Text>
        <HStack padding={2} borderRadius={10} alignItems={"center"} backgroundColor={"white"}>
            <Input  borderRadius={10} padding={6} placeholder='Digite seu email'/> 
            <Button background={"#4646f8e1"} height={"100%"}  borderRadius={10}><Icon.Send/></Button>
        </HStack>
        
        </Box>
        
    </VStack>
  )
}
