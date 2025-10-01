import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import * as Icon from "react-bootstrap-icons"
export default function MusicBoxCard({color}) {
    const [hidden, setHidden] = useState(true)
  return (
    <Box width={"100%"} position={"relative"}  onMouseLeave={()=>setHidden(true)} onMouseOver={()=>setHidden(false)} minHeight={0} borderRadius={10} padding={2} transition={{_hover:"all ease-in-out 300ms"}}  _hover={{backgroundColor:"#8989896d"}} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <Image borderRadius={10} minHeight={200} width={"100%"} height={120} src='https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg'/>
                        <Heading fontSize={".8rem"} color={color || "white"} fontWeight={400}>Drake</Heading>
                        <Text color={"gray"} fontSize={".5rem"}>8.9M Plays</Text>
                        <Box style={{bottom:57,right:17}} justifyContent={"center"} alignItems={"center"} padding={2} display={hidden ? "none" : "flex"} position={"absolute"} right={0} borderRadius={50} background={"#3f42e9ff"}>
                            <Icon.PlayFill color='white'/>
                        </Box>
                        <Button display={hidden ? "none" : "flex"} background={"transparent"} position={"absolute"} top={3} left={2}>
                            <Icon.Download/>
                        </Button>
                      </Box>
  )
}
