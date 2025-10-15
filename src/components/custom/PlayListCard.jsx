import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';
export default function PlayListCard({name, title, image}) {
  const navigate = useNavigate()
  return (
    <Box   width={"100%"} borderRadius={10} padding={2}  transition={{_hover:"all ease-in-out 500ms"}} _hover={{backgroundColor:"#f6f6f648"}} display={"flex"} gap={2} alignItems={"center"}>
                      <Image onClick={()=>{navigate(`/Music/Single/${title}`)}} alt='piccover' src={image} borderRadius={10} style={{width:50, height:50}}/>
                      <VStack alignItems={"flex-start"} gap={1} flex={1}>
                        <Heading color={"white"} lineHeight={1} fontSize={14}>{name}</Heading>
                        <Text color={"gray"} fontSize={10}>{title}</Text>
                      </VStack>
                      <Button bg={"transparent"}><Icon.Heart/></Button>
                    </Box>
  )
}
