import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import AvatarCustom from './AvatarCustom'

export default function Message({id, message, author}) {
  return (
    <Box margin={4} marginRight={-5} marginLeft={-5} justifySelf={id ? "flex-end" :"flex-start"} display={"flex"} gap={2} alignItems={"flex-end"}>
        {!id &&  <AvatarCustom fontSize={10} size={"2xs"}  name={author ? author : "Anonymous"}/>}
       <Box display={"flex"} alignItems={"center"} gap={1} width={"fit-content"} bg={id ? "#180632ff"  :"blue"} borderRadius={20} borderBottomRightRadius={id && 0} borderBottomLeftRadius={!id && 0} p={4} justifySelf={id ? "flex-end" :"flex-start"}>
        
        <Text fontSize={12} color={ id ? "white" :"white"}>{message}</Text> 
        
    </Box> 
    {id &&  <AvatarCustom fontSize={10} size={"2xs"}  name={author ? author : "Anonymous"}/>} 
    </Box>
    
  )
}
