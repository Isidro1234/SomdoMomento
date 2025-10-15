import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import MusicCardPlaylist from './MusicCardPlaylist';
import { useLogiState } from '../../states/useLogic';
import PlayListCard from './PlayListCard';
export default function MusicSideshow() {
  const musicas = useLogiState((state)=>state.musicas);
  const sidePlayer = useLogiState((state)=>state.audioplaying)
  return (
    <VStack  gap={2} alignItems={"flex-start"}  width={"100%"} borderRadius={10} transitionDuration={"fast"} transition={"ease-in-out"}   justifyContent={"flex-start"} >
              <VStack  alignItems={"flex-start"} padding={2} paddingTop={4} borderRadius={10} flex={1} width={"100%"} background={"#191919ff"}>
                <Button display={"flex"} flexDirection={"row"} alignItems={"center"} bg={"transparent"} color={"gray"} fontWeight={300}><Icon.MusicNoteList/><Text>Catalogo de Musicas</Text></Button>
                <Box width={"100%"}>
                  {sidePlayer?.[1] &&
                  <Image alt='piccover' src={sidePlayer?.[1]} borderRadius={10} style={{width:"100%", height:100}}/>
                  }
                </Box>
                
                <Text lineHeight={.7} paddingTop={2} fontSize={12} color={"gray"} paddingLeft={1}>Playlist</Text>
                <HStack paddingLeft={1} alignItems={"center"}>
                  <Text transition={{_hover:"all ease-in-out 500ms"}} _hover={{background:"#9b9b9bff"}} cursor={"pointer"} color={"#b5b5b5ff"} borderRadius={50} padding={1.5} background={"#5252526a"} fontSize={8}>recentes</Text>
                  <Text transition={{_hover:"all ease-in-out 500ms"}} _hover={{background:"#9b9b9bff"}} cursor={"pointer"} color={"#b5b5b5ff"} borderRadius={50} padding={1.5} background={"#5252526a"} fontSize={8}>popular</Text>
                </HStack>
               {musicas.map((item,index)=>{
                  return(<PlayListCard title={item?.artistSongTitle} name={item?.artistname} image={item?.artistpic} key={index}/>)
                })}
              </VStack>
            </VStack>
  )
}
