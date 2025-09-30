import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import * as Icon from "react-bootstrap-icons"
import MusicBox from './MusicBox'
import SectionMusicFeed from './SectionMusicFeed';
export default function CustomMain({music}) {
    console.log(music)
    const height = window.screen.height;
  return (
    <VStack className='cont' width={"100%"} padding={10} paddingRight={0} flex={1} overflowY={"auto"} borderRadius={10} backgroundColor={"#f6f6f6"} alignItems={"flex-start"}>
        {music[0]?.map((items,index)=>{
            return(<SectionMusicFeed data={items} key={index}/>)
        })}
    </VStack>
  )
}
