import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import MusicBoxCard from './MusicBoxCard';
export default function MusicBodyMusic() {
  return (
    <VStack minW={100} gap={1} padding={5} alignItems={"flex-start"} background={"#191919ff"} borderRadius={10} width={"100%"} flex={1} height={"fit-content"} overflowY={"auto"} minH={0}>
                <Heading color={"white"} fontSize={"1.1rem"} fontWeight={500}>Billboard</Heading>
                <HStack minHeight={.7} flexWrap={"wrap"} alignItems={"flex-start"}  borderRadius={10} background={"#191919ff"} width={"100%"} height={"100%"}>
                  <MusicBoxCard/>
                  <MusicBoxCard/>
                  <MusicBoxCard/>
                  <MusicBoxCard/>
               </HStack>
               </VStack>
  )
}
