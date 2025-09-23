import React, { useEffect } from 'react'
import MusicCard from './MusicCard'
import { Heading, VStack } from '@chakra-ui/react'
import { useLogiState } from '../../states/useLogic'

export default function MusicSection() {
    const musicas = useLogiState((state)=>state.musicas)
    const getmusic = useLogiState((state)=>state.getMusic)
     useEffect(()=>{
         async function getmus(){
            const result = await getmusic()
         }
         getmus()
     }, [])
  return (
    <VStack paddingBottom={10} gap={3} paddingLeft={4} paddingRight={4} justifyContent={"flex-start"} alignItems={"flex-start"} width={"100%"}  backgroundColor={"#ffffffcb"}>
      <Heading>Musicas</Heading>
      {musicas?.map((item,index)=>{
        return(
          <MusicCard key={index} id={item?.id} image={item?.artistpic} title={item?.artistSongTitle} audio={item?.artistSong} artist={item?.artistname}/>
        )
      })}
      
    </VStack>
  )
}
