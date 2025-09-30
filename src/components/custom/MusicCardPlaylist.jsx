import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import * as Icon from 'react-bootstrap-icons';
export default function MusicCardPlaylist() {
  return (
    <Box  width={"100%"} borderRadius={10} padding={2}  transition={{_hover:"all ease-in-out 500ms"}} _hover={{backgroundColor:"#f6f6f648"}} display={"flex"} gap={2} alignItems={"center"}>
                      <Image alt='piccover' src='https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg' borderRadius={10} style={{width:50, height:50}}/>
                      <VStack alignItems={"flex-start"} gap={1} flex={1}>
                        <Heading color={"white"} lineHeight={1} fontSize={14}>Drake</Heading>
                        <Text color={"gray"} fontSize={10}>One Dance</Text>
                      </VStack>
                      <Button bg={"transparent"}><Icon.Heart/></Button>
                    </Box>
  )
}
