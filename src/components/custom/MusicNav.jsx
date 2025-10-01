import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'
import * as Icon from 'react-bootstrap-icons';
export default function MusicNav() {
  return (
    <VStack className='first'  position={"relative"} minHeight={500} padding={1}  gap={5} flex={1.5} justifyContent={"flex-start"} width={"100%"}>
               <Nav color={"white"} serchiconColor={"gray"}  searchbarColor={"#242424b9"} background={"transparent"}/>
               <HStack left={0} borderRadius={10} position={"absolute"}  width={"100%"} height={"100%"}>
                  <Image minW={100} borderRadius={10} height={"100%"} width={"100%"} objectFit={"cover"} src='https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg'/>
                  <VStack alignItems={"flex-start"} position={"absolute"} gap={4} padding={5} left={0} bottom={0}>
                      <Heading lineHeight={.5} color={"white"} fontSize={25}>One Dance</Heading>
                      <Text lineHeight={.5} fontSize={10} color={"#f6f6f6"}>Drake</Text>
                      <HStack>
                        <Button transition={{_hover:"all ease-in-out 500ms"}} _hover={{background:"#4378dbff"}} bg={"#f6f6f641"} borderRadius={20}><Icon.PlayFill/>Play</Button>
                        <Button bg={"#f6f6f636"} borderRadius={20}><Icon.Shuffle/>Aleatorio</Button>
                      </HStack>
                  </VStack>
               </HStack>
            </VStack>
  )
}
