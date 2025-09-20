import React from 'react'
import MusicCard from './MusicCard'
import { Heading, VStack } from '@chakra-ui/react'

export default function MusicSection() {
  const musicdata = ["",'',"","",""]
  return (
    <VStack paddingBottom={10} gap={3} paddingLeft={4} paddingRight={4} justifyContent={"flex-start"} alignItems={"flex-start"} width={"100%"}  backgroundColor={"#ffffffcb"}>
      <Heading>Musicas</Heading>
      {musicdata.map((item,index)=>{
        return(
          <MusicCard key={index}/>
        )
      })}
      
    </VStack>
  )
}
