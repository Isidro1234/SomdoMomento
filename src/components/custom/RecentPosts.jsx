import React from 'react'
import PostCard from './PostCard'
import { Box, Heading, HStack } from '@chakra-ui/react'

export default function RecentPosts() {
    const data = ["","",""]
  return (
    <HStack g padding={10} gap={7}>
        <Box display={"flex"} flexDirection={"column"} gap={5} marginTop={5}>
            <Heading>Destaques da Banda</Heading>
            <HStack flexWrap={"wrap"}>
            {data.map((item,index)=>{
                return(
                    <PostCard key={index}/>
                )
                })} 
            </HStack>
        </Box>
        
        
    </HStack>
  )
}
