import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import * as Icon from 'react-bootstrap-icons';
import { useLogiState } from '../../states/useLogic';
import PlayListCard from './PlayListCard';
export default function MusicSide() {
    const musicas = useLogiState((state)=>state.musicas);

  return (
    <VStack  className='oneOnly'  gap={2}  position={"relative"} alignItems={"flex-start"}  height={"100%"} borderRadius={10} transitionDuration={"fast"} transition={"ease-in-out"}   justifyContent={"flex-start"} >
              <VStack position={"relative"} height={"100%"} alignItems={"flex-start"} padding={2} paddingTop={4} borderRadius={10}  width={"100%"} background={"#191919ff"}>
                <Button display={"flex"} flexDirection={"row"} alignItems={"center"} bg={"transparent"} color={"gray"} fontWeight={300}><Icon.MusicNoteList/><Text>Catalogo de Musicas</Text></Button>
                <Box width={"100%"}>
                    <Image alt='piccover' src='https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg' borderRadius={10} style={{width:"100%", height:100}}/>
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
