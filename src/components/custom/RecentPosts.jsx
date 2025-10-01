import React from 'react'
import PostCard from './PostCard'
import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import MusicBoxCard from './MusicBoxCard'

export default function RecentPosts() {
  const data = ["", "", ""]

  return (
    <Box className='destaquesection' width="100%" p={4}  display={"flex"} paddingTop={20} justifyContent={"center"} paddingBottom={20}>
     <VStack className='mediaSmallScreen' maxWidth={"70%"}  width={"100%"}>
                     <Heading lineHeight={1}>Musicas</Heading>
                           <HStack>
                             <Text color={"red"} fontSize={10}> Top</Text>
                             <Text color={"gray"} fontSize={10}> | </Text>
                             <Text color={"gray"} fontSize={10}>22 novas</Text>
                           </HStack>
                           
                           <HStack width={"100%"} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(200px, 100%), 1fr))"}>
                             <MusicBoxCard color={"gray"}/>
                             <MusicBoxCard color={"gray"}/>
                             <MusicBoxCard color={"gray"}/>
                             <MusicBoxCard color={"gray"}/>
                           </HStack>
                   </VStack>
    </Box>
  )
}
