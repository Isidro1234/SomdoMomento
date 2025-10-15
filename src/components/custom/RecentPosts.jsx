import React, { useEffect } from 'react'
import PostCard from './PostCard'
import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import MusicBoxCard from './MusicBoxCard'
import { useLogiState } from '../../states/useLogic'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function RecentPosts() {
  const data = ["", "", ""]
  const gettingmusic = useLogiState((state)=>state.getMusic)
  const musicas = useLogiState((state)=>state.musicas);
  useEffect(()=>{
      async function getting(){
        await gettingmusic()
      }
      getting()
  }, [])
  useGSAP(()=>{
      gsap.from('.destaquesection',{
        opacity:0,
        yPercent:100,
        ease:"bounce.out",
        duration:1,
      })
    },[])
  return (
    <Box className='destaquesection' width="100%" p={4}  display={"flex"} paddingTop={20} justifyContent={"center"} paddingBottom={20}>
     <VStack className='mediaSmallScreen' maxWidth={"70%"}  width={"100%"}>
                     <Heading lineHeight={1}>Musicas</Heading>
                           <HStack>
                             <Text color={"red"} fontSize={10}> Top</Text>
                             <Text color={"gray"} fontSize={10}> | </Text>
                             <Text color={"gray"} fontSize={10}>{musicas?.length} novas</Text>
                           </HStack>
                           
                           <HStack width={"100%"} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(200px, 100%), 1fr))"}>
                             {musicas.map((item,index)=>{
                             
                              return( 
                                index <= 3 &&
                                <MusicBoxCard name={item?.artistname} title={item?.artistSongTitle} image={item?.artistpic} music={item?.artistSong} key={index} color={"gray"}/>
                              )
                             })}
                           </HStack>
                   </VStack>
    </Box>
  )
}
