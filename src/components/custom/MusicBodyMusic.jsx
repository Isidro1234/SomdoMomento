import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import * as Icon from 'react-bootstrap-icons';
import MusicBoxCard from './MusicBoxCard';
import { useLogiState } from '../../states/useLogic';
export default function MusicBodyMusic() {
     const gettingmusic = useLogiState((state)=>state.getMusic)
      const musicas = useLogiState((state)=>state.musicas);
      useEffect(()=>{
          async function getting(){
            await gettingmusic()
          }
          getting()
      }, [])
  return (
    <VStack minW={100} display={"grid"} gridTemplateRows={".2fr 2fr"} gap={1} padding={5} alignItems={"flex-start"} background={"#191919ff"} borderRadius={10} width={"100%"} minH={0}>
                <Heading color={"white"} fontSize={"1.1rem"} fontWeight={500}>Billboard</Heading>
                <HStack minHeight={.7} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(150px, 100%),1fr))"}  borderRadius={10} background={"#191919ff"} width={"100%"} height={"100%"}>
                   {musicas.map((item,index)=>{                       
                        return( 
                        index <= 3 &&
                        <MusicBoxCard name={item?.artistname} title={item?.artistSongTitle} image={item?.artistpic} music={item?.artistSong} key={index} color={"gray"}/>
                    )
                    })}
               </HStack>
               </VStack>
  )
}
