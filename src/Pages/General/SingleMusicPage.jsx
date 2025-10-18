import { Box, Button, Heading, HStack, Image, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Nav from '../../components/custom/Nav'
import { useNavigate, useParams } from 'react-router'
import { useLogiState } from '../../states/useLogic';
import FixedPlayer from '../../components/custom/FixedPlayer'

import * as Icon from "react-bootstrap-icons"
import MusicCardPlaylist from '../../components/custom/MusicCardPlaylist';
import AvatarCustom from '../../components/custom/AvatarCustom';

 function SingleMusicPage() {
  const {id} = useParams();
  const gettingmusic = useLogiState((state)=>state.getMusic)
  const musicas = useLogiState((state)=>state.musicas);
  const [loading, setLoading] = useState(true)
  const decoded = decodeURIComponent(id)
  const [musicagotten, setMusicas] = useState(null)
  const navigete = useNavigate()
  useEffect(()=>{
    async function getting(){
      await gettingmusic()
    }
    getting()
  }, [gettingmusic])
  
useEffect(()=>{
     if(musicas.length > 0){
      const filterMusicas = musicas?.find((music)=>String(music?.artistSongTitle)
      .toLowerCase().trim() === String(decoded).toLowerCase().trim() ||
        String(music?.artistSongTitle).toLowerCase().trim().includes(String(decoded).toLowerCase().trim()));
        if(!filterMusicas){
          navigete("/")
        }else{
          setMusicas(filterMusicas)
        }  
        setLoading(false)
     }
  }, [musicas , decoded , navigete])

  if(loading){
    return(
      <VStack width={"100%"} height={"100%"}>
        <Spinner color={"white"} size={"lg"}/>
      </VStack>
        
    )
  }
  if(!musicagotten){
    return(<VStack justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"}>
      <Text color={"white"}>A musica nao foi encontrada</Text>
    </VStack>)
  }
  return (
    <VStack width={"100%"} alignItems={"flex-start"}   background={"#00000030"}>
      <Nav/>
       {loading &&  <Spinner color={"white"} size={"lg"}/> } 

      <HStack  padding={1} margin={5} width={"100%"} 
     flexWrap={"wrap"} overflowY={"auto"} alignItems={"flex-start"}  borderRadius={20} >
   

            <Box padding={5} paddingTop={0}>

              <Image style={{width:300, height:300, borderRadius:20}} src={musicagotten?.artistpic}/>
              <HStack margin={2} justifyContent={"center"} padding={2}>
                <Button borderRadius={50} bg={"#1b1b1b92"}><Icon.SkipStart/></Button>
                <Button borderRadius={50} bg={"#1b1b1b92"}><Icon.Play/></Button>
                <Button borderRadius={50} bg={"#1b1b1b92"}><Icon.SkipEnd/></Button>
              </HStack>
              
            </Box>
            <Box minWidth={"min(200px, 100%)"}>
              <Heading fontSize={17} color={"#f6f6f6"}>Artista</Heading>
              <HStack marginTop={2} alignItems={"center"}>
                <AvatarCustom borderRadius={50} size={"2xl"}/>
                <VStack alignItems={"flex-start"}>
                  <Text fontWeight={700} fontSize={15} lineHeight={1} color={"gray"}>nome do artista</Text>
                  <Text fontSize={12} lineHeight={1} color={"gray"}>@musico</Text>
                </VStack>
              </HStack>
              <Box marginTop={3}>
                <Heading fontSize={12} color={"#dcdcdcff"}>Descricao</Heading>
                <Text maxWidth={200} color={"gray"}>fsdfsfsfsdfddddddddddddddddddddddddddddddddddd
                  ddddddddddddddddddddddddddddddddddddddddddd
                </Text>
              </Box>
              
            </Box>
            <Box maxHeight={300} flex={1} padding={10}>
              {musicas?.map((item,index)=>{
              return(
                <MusicCardPlaylist key={index}/>
              )
            })}
            </Box>
            
            <FixedPlayer position={"fixed"}/>
        
      </HStack> 
    </VStack>
  )
}


export default React.memo(SingleMusicPage)