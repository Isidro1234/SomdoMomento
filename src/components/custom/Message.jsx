import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import AvatarCustom from './AvatarCustom'

export default function Message({message, author}) {
  return (
    <Box justifySelf={author? "flex-end" :"flex-start"} display={"flex"} gap={2} alignItems={"flex-end"}>
        {!author &&  <AvatarCustom fontSize={10} size={"2xs"}  name={author ? author : "Anonymous"}/>}
       <Box display={"flex"} alignItems={"center"} gap={1} width={"fit-content"} bg={author ? "#ffffffff"  :"blue"} borderRadius={10} p={2} justifySelf={author? "flex-end" :"flex-start"}>
        
        <Text color={author ? "black" :"white"}>{message}</Text> 
        
    </Box>
    {author &&  <AvatarCustom fontSize={10} size={"2xs"}  name={author ? author : "Anonymous"}/>} 
    </Box>
    
  )
}
