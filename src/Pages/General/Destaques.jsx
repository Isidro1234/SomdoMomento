import React, { useEffect} from 'react'
import Nav from '../../components/custom/Nav'
import {Box} from '@chakra-ui/react/box'
import {Heading} from '@chakra-ui/react/heading'
import {Text} from '@chakra-ui/react/text'
import { HStack,VStack } from '@chakra-ui/react/stack'
import {Image} from '@chakra-ui/react/image'
import Footer from '../../components/custom/Footer'
import { useLogiState } from '../../states/useLogic'
import SidebarNews from '../../components/custom/SidebarNews'
import MusicBoxCard from '../../components/custom/MusicBoxCard'
import MainNews from '../../components/custom/MainNews'
import ArticleSection from '../../components/custom/ArticleSection'
import StatusComp from '../../components/custom/StatusComp'
import FixedPlayer from '../../components/custom/FixedPlayer'

function Destaques() {
    const gettingmusic = useLogiState((state)=>state.getMusic)
    const playaudio = useLogiState((state)=>state. audioplaying)
    const statusget = useLogiState((state)=>state.getStatus)
    const stats = useLogiState((state)=>state.status)
    const musics = useLogiState((state)=>state.musicas)
    const getNoticias  = useLogiState((state)=>state.getPosts)
    const Noticias = useLogiState((state)=>state.noticias)
        useEffect(()=>{
          async function gettingNoticias(){
            await getNoticias("noticias")
          }
          gettingNoticias()
        },[])
     useEffect(()=>{
       async function gett(){
         await gettingmusic()
         await statusget()
       }
       gett()
     },[])
   console.log(stats)
  return (
    <VStack className='Destaques' width={"100%"}>
      <Nav position={"noticias"} background={"black"}/>
        <HStack className='mediaSmallScreen'  maxWidth={"70%"} marginTop={"100px"} width={"100%"}>
          <HStack  width={"100%"}  display={"grid"} gridTemplateColumns={"repeat(autofill, minmax(400px, 1fr))"} gap={5} padding={5}>
           
           
            <HStack justifyContent={"flex-start"} alignItems={"center"} margin={0}  borderRadius={10}  padding={0}>
             {stats?.map((item,index)=>{
              return (<StatusComp id={item?.id} 
                key={index} artistname={item?.artistName} 
                link={item?.instaLink}
                image={item?.artistImage}
                media={item?.image} description={item?.description}  
                icon={<Image width={20} height={20} borderRadius={50} 
                src={item?.image}/>}/>
             )})}
            </HStack>
            <HStack justifyContent={"flex-start"} alignItems={"center"} margin={0} marginTop={0} borderRadius={10}  padding={0}>
             <Box  width={"100%"} height={220}>
             <video playsInline loop  autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:30}}  src='https://www.pexels.com/download/video/2795749/'></video>
             </Box> 
            </HStack>
            <VStack width={"100%"}>
              <VStack  width={"100%"}>
                <Heading lineHeight={1}>Musicas</Heading>
                      <HStack>
                        <Text color={"red"} fontSize={10}> Top</Text>
                        <Text color={"gray"} fontSize={10}> | </Text>
                        <Text color={"gray"} fontSize={10}>{musics?.length} novas</Text>
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
                        <Text color={"gray"} fontSize={10}>{Noticias?.length} novas</Text>
                      </HStack>
                <VStack className='destaqueflex' padding={0} width={"100%"} paddingTop={0} gridGap={10} justifyContent={"flex-start"} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(500px, 100%),1fr))"}>
                              <Box alignSelf={"flex-start"} width={"100%"} borderRadius={10} padding={0}>
                                {Noticias?.map((item, index)=>{
                                 return(
                                    item?.select === "principal" &&
                                    <MainNews title={item?.title} image={item?.imagecover} category={item?.category} data={item?.userdata} key={index}/>
                                )
                                })}
                                <HStack>
                                  <Box position={"fixed"}>
                                    <Image/>
                                  </Box>
                                </HStack>
                              </Box>
                              <Box className='sidelocation'borderRadius={10}  alignSelf={"flex-start"} gridColumnGap={10} gridRowGap={10} display={"grid"} gridGap={10} gridTemplateColumns={"repeat(auto-fit, minmax(min(300px, 100%),1fr))"} padding={0}>
                                 {Noticias?.map((item, index)=>{
                                                                             
                                  return(
                                    item?.select !== "principal" &&
                                      <SidebarNews/>
                                    )
                                  })}
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
export default React.memo(Destaques)
