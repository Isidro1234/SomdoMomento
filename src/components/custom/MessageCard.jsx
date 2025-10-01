import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import Message from './Message'

export default function MessageCard({hide}) {
  return (
    <VStack gap={0} className={hide ? "hide" : "show"}  width={400}  position={"fixed"} zIndex={100}  right={5}  bottom={40} height={440} backgroundColor={"#4a82fcff"} borderRadius={10}>
        <Box borderRadius={10} borderBottomRightRadius={0} borderBottomLeftRadius={0}  p={4} width={"100%"} bg={"blue"}>
            <Heading textAlign={"center"} color={"white"}>Messaging</Heading>
        </Box>
        <Box overflowY={"auto"} padding={5} width={"100%"} flex={1} bg={"#f6f6f6"}>
            <Message message={"hello"} author={"json"}/>
            <Message message={"hello"}/>
            
        </Box>
        <Box display={"flex"} gap={2} alignItems={"center"} borderRadius={10} borderTopRightRadius={0} borderTopLeftRadius={0} p={5} bg={"white"} width={"100%"}>
            <Input flex={1} borderRadius={40} placeholder='Message'/>
            <Button bg={"blue"} borderRadius={50}>Enviar</Button>
        </Box>
    </VStack>
  )
}
