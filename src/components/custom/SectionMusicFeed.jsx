import { Box, Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import MusicBox from './MusicBox'

export default function SectionMusicFeed({data}) {
    console.log(data)
  return (
    <VStack  overflowY={"auto"} paddingRight={0}  minHeight={"fit-content"} width={"100%"} padding={0} paddingBottom={10} borderRadius={10} alignItems={"flex-start"} >
      <Heading>Musicas</Heading>
             <HStack className='cont' width={"100%"} overflowX={"auto"} paddingRight={0}>
                {data?.map((item,index)=>{
                    return(
                    <MusicBox audio={item?.artistSong} image={item?.artistpic} title={item?.artistSongTitle} artistname={item?.artistname} key={index}/>
                    )
                })}
                  
             </HStack>
    </VStack>
  )
}
