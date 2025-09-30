import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function SideBarCustom() {
  return (
    <VStack alignItems={"flex-start"} flex={1} borderRadius={10} padding={10} backgroundColor={"#f6f6f6"}>
         <Heading>Historico</Heading>
         <Box display={"flex"} gap={2}>
            <Image borderRadius={10} height={50} width={50} alt='cover pic' src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'/>
            <VStack justifyContent={"center"} alignItems={"flex-start"}>
              <Text lineHeight={.5}>Dance</Text>
              <Text fontSize={10}>Genius</Text>  
            </VStack>  
         </Box>
    </VStack>
  )
}
