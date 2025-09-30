import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
export default function MusicSide() {
  return (
    <VStack  className='oneOnly'  gap={2} alignItems={"flex-start"}  height={"100%"} borderRadius={10} transitionDuration={"fast"} transition={"ease-in-out"}   justifyContent={"flex-start"} >
              <VStack alignItems={"flex-start"} padding={2} paddingTop={4} borderRadius={10} flex={1} width={"100%"} background={"#191919ff"}>
                <Button display={"flex"} flexDirection={"row"} alignItems={"center"} bg={"transparent"} color={"gray"} fontWeight={300}><Icon.MusicNoteList/><Text>Catalogo de Musicas</Text></Button>
                <Box width={"100%"}>
                    <Image alt='piccover' src='https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg' borderRadius={10} style={{width:"100%", height:100}}/>
                </Box>
                
                <Text lineHeight={.7} paddingTop={2} fontSize={12} color={"gray"} paddingLeft={1}>Playlist</Text>
                <HStack paddingLeft={1} alignItems={"center"}>
                  <Text transition={{_hover:"all ease-in-out 500ms"}} _hover={{background:"#9b9b9bff"}} cursor={"pointer"} color={"#b5b5b5ff"} borderRadius={50} padding={1.5} background={"#5252526a"} fontSize={8}>recentes</Text>
                  <Text transition={{_hover:"all ease-in-out 500ms"}} _hover={{background:"#9b9b9bff"}} cursor={"pointer"} color={"#b5b5b5ff"} borderRadius={50} padding={1.5} background={"#5252526a"} fontSize={8}>popular</Text>
                </HStack>
                <Box  width={"100%"} borderRadius={10} padding={2}  transition={{_hover:"all ease-in-out 500ms"}} _hover={{backgroundColor:"#f6f6f648"}} display={"flex"} gap={2} alignItems={"center"}>
                  <Image alt='piccover' src='https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg' borderRadius={10} style={{width:50, height:50}}/>
                  <VStack alignItems={"flex-start"} gap={1} flex={1}>
                    <Heading color={"white"} lineHeight={1} fontSize={14}>Drake</Heading>
                    <Text color={"gray"} fontSize={10}>One Dance</Text>
                  </VStack>
                  <Button bg={"transparent"}><Icon.Heart/></Button>
                </Box>
              </VStack>
            </VStack>
  )
}
