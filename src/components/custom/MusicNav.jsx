import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Nav from './Nav'
import * as Icon from 'react-bootstrap-icons';
import { useLogiState } from '../../states/useLogic';
export default function MusicNav({musicdata}) {
  const setmusic = useLogiState((state)=>state.setplaysongbottom)
  const [isplaying , setPlaying] = useState(true)
  async function handleAleatorio(){
    const len = musicdata?.length;
    console.log(len)
    const size = Math.floor(Math.random() * (len - 1) + (len - 1));
    console.log(size)
    isplaying ? setPlaying(false) : setPlaying(true)
    await setmusic(musicdata?.[size]?.musicurl , musicdata?.[size]?.media, musicdata?.[size]?.artistinfo?.artistname ,
      musicdata?.[size]?.artistinfo?.title , isplaying
    )
  }
  async function handlePlay(){
    isplaying ? setPlaying(false) : setPlaying(true)
    await setmusic(musicdata?.[0]?.musicurl , musicdata?.[0]?.media, musicdata?.[0]?.artistinfo?.artistname ,
      musicdata?.[0]?.artistinfo?.title , isplaying
    )
  }
  console.log(musicdata)
  return (
    <VStack className='first'  position={"relative"} minHeight={500} padding={1}  gap={5} flex={1.5} justifyContent={"flex-start"} width={"100%"}>
               <Nav position={"nothing"} color={"white"} serchiconColor={"gray"}  searchbarColor={"#242424b9"} background={"transparent"}/>
               <HStack left={0} borderRadius={10} position={"absolute"}  width={"100%"} height={"100%"}>
                {String(musicdata?.[0]?.media).endsWith("mp4") &&
                <video style={{width:"100%", height:"100%", minWidth:100}} src={musicdata?.[0]?.media}/>
                }
                {!String(musicdata?.[0]?.media).endsWith("mp4") &&
                  <Image  minW={100} borderRadius={10} height={"100%"} width={"100%"} objectFit={"cover"} src={musicdata?.[0]?.media}/>
                }

                  <VStack alignItems={"flex-start"} position={"absolute"} gap={4} padding={5} left={0} bottom={0}>
                      <Heading lineHeight={.5} color={"white"} fontSize={25}>{musicdata?.[0]?.artistinfo?.artistname}</Heading>
                      <Text lineHeight={.5} fontSize={10} color={"#f6f6f6"}>{musicdata?.[0]?.artistinfo?.title}</Text>
                      <HStack>
                        <Button onClick={handlePlay} transition={{_hover:"all ease-in-out 500ms"}} _hover={{background:"#4378dbff"}} bg={"#f6f6f641"} borderRadius={20}>
                          {isplaying ?  (<HStack gap={1} alignItems={"center"}><Icon.PlayFill/>Tocar</HStack> )  : (<HStack gap={1}  alignItems={"center"}><Icon.PauseFill/>Parar</HStack> ) }</Button>
                        <Button onClick={handleAleatorio} bg={"#f6f6f636"} borderRadius={20}><Icon.Shuffle/>Aleatorio</Button>
                      </HStack>
                  </VStack>
               </HStack>
            </VStack>
  )
}
