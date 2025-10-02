import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import { useGSAP } from '@gsap/react'
import Slide from '../../components/custom/Slide'
import Paginator from '../../components/custom/Paginator'
import { useLogiState } from '../../states/useLogic'
import SidebarNews from '../../components/custom/SidebarNews'
import MusicBoxCard from '../../components/custom/MusicBoxCard'
import MainNews from '../../components/custom/MainNews'
import MusicBox from '../../components/custom/MusicBox'
import ArticleSection from '../../components/custom/ArticleSection'
import StatusComp from '../../components/custom/StatusComp'
import FixedPlayer from '../../components/custom/FixedPlayer'

export default function Destaques() {
   const gettingmusic = useLogiState((state)=>state.getMusic)
    const playaudio = useLogiState((state)=>state. audioplaying)
     const musics = useLogiState((state)=>state.musicas)
     useEffect(()=>{
       async function gett(){
         await gettingmusic()
       }
       gett()
     },[])
  return (
    <VStack className='Destaques' width={"100%"}>
      <Nav background={"black"}/>
        <HStack className='mediaSmallScreen'  maxWidth={"70%"} width={"100%"}>
          <HStack  width={"100%"}  display={"grid"} gridTemplateColumns={"repeat(autofill, minmax(400px, 1fr))"} gap={5} padding={5}>
           
           
            <HStack justifyContent={"flex-start"} alignItems={"center"} margin={0}  borderRadius={10}  padding={0}>
             <StatusComp icon={<Image width={20} height={20} borderRadius={50} src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg'/>}/>
            </HStack>
            <HStack justifyContent={"flex-start"} alignItems={"center"} margin={0} marginTop={0} borderRadius={10}  padding={0}>
             <Box  width={"100%"} height={220}>
             <video loop  autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:30}}  borderRadius={30} src='https://www.pexels.com/download/video/2795749/'></video>
             </Box> 
            </HStack>
            <VStack width={"100%"}>
              <VStack  width={"100%"}>
                <Heading lineHeight={1}>Musicas</Heading>
                      <HStack>
                        <Text color={"red"} fontSize={10}> Top</Text>
                        <Text color={"gray"} fontSize={10}> | </Text>
                        <Text color={"gray"} fontSize={10}>22 novas</Text>
                      </HStack>
                      
                      <HStack width={"100%"} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(200px, 100%), 1fr))"}>
                        {musics.map((item,index)=>{                       
                            return( 
                              index <= 3 &&
                              <MusicBoxCard name={item?.artistname} title={item?.artistSongTitle} image={item?.artistpic} music={item?.artistSong} key={index} color={"gray"}/>
                          )
                        })}
                      </HStack>
              </VStack>
              
            </VStack>
            <VStack width={"100%"}>
              <Heading lineHeight={1}>Noticias</Heading>
                      <HStack>
                        <Text color={"red"} fontSize={10}> Top</Text>
                        <Text color={"gray"} fontSize={10}> | </Text>
                        <Text color={"gray"} fontSize={10}>22 novas</Text>
                      </HStack>
                <VStack className='destaqueflex' padding={0} width={"100%"} paddingTop={0} gridGap={10} justifyContent={"flex-start"} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(500px, 100%),1fr))"}>
                              <Box alignSelf={"flex-start"} width={"100%"} borderRadius={10} padding={0}>
                                <MainNews/>
                                <HStack>
                                  <Box position={"fixed"}>
                                    <Image/>
                                  </Box>
                                </HStack>
                              </Box>
                              <Box className='sidelocation'borderRadius={10}  alignSelf={"flex-start"} gridColumnGap={10} gridRowGap={10} display={"grid"} gridGap={10} gridTemplateColumns={"repeat(auto-fit, minmax(min(300px, 100%),1fr))"} padding={0}>
                                  <SidebarNews/>
                                  <SidebarNews/>
                                  <SidebarNews/>
                              </Box>
                            </VStack>
            </VStack>
            
        </HStack>
        </HStack>
        <ArticleSection/>
          <FixedPlayer isplaying={playaudio?.[4]} audio={playaudio?.[0]} artistname={playaudio?.[2]} title={playaudio?.[3]} image={playaudio?.[1]}  hide={!playaudio?.[4]} position={"fixed"}/>
        <Footer/>
    </VStack>
  )
}
