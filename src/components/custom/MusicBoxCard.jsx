import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import * as Icon from "react-bootstrap-icons"
export default function MusicBoxCard() {
    const [hidden, setHidden] = useState(true)
  return (
    <Box width={"100%"} position={"relative"} onMouseLeave={()=>setHidden(true)} onMouseOver={()=>setHidden(false)} minHeight={10} borderRadius={10} padding={2} transition={{_hover:"all ease-in-out 300ms"}}  _hover={{backgroundColor:"#8989896d"}} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <Image borderRadius={10} minHeight={10} width={"100%"} height={120} src='https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg'/>
                        <Heading fontSize={".8rem"} color={"white"} fontWeight={400}>Drake</Heading>
                        <Text color={"gray"} fontSize={".5rem"}>8.9M Plays</Text>
                        <Box style={{bottom:57,right:10}} justifyContent={"center"} alignItems={"center"} padding={2} display={hidden ? "none" : "flex"} position={"absolute"} right={0} borderRadius={50} background={"#3f42e9ff"}>
                            <Icon.PlayFill color='white'/>
                        </Box>
                      </Box>
  )
}
