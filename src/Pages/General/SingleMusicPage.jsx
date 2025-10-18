import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Nav from '../../components/custom/Nav'
import { useNavigate, useParams } from 'react-router'
import { useLogiState } from '../../states/useLogic';
import FixedPlayer from '../../components/custom/FixedPlayer'

import * as Icon from "react-bootstrap-icons"
import MusicCardPlaylist from '../../components/custom/MusicCardPlaylist';

 function SingleMusicPage() {
  const {id} = useParams();
  const gettingmusic = useLogiState((state)=>state.getMusic)
  const musicas = useLogiState((state)=>state.musicas);
  const navigete = useNavigate()
  useEffect(()=>{
    async function getting(){
      await gettingmusic()
    }
    getting()
  }, [])
  
  const filterMusicas = musicas?.filter((music)=>String(music?.artistSongTitle).toLowerCase().trim() === id ||
String(music?.artistSongTitle).toLowerCase().trim().includes(id));
  useEffect(()=>{
    if(filterMusicas.length <= 0){
      navigete("/")
    }
  }, [])
  return (
    <VStack width={"100%"} alignItems={"flex-start"}   background={"#00000030"}>
      <Nav/>
      <HStack  padding={1} margin={5} width={"100%"} 
      maxWidth={" min(500px, 100%)"} flexWrap={"wrap"} overflowY={"auto"}  borderRadius={20} >
   

            <Box padding={5} paddingTop={0}>

              <Image style={{width:300, height:300, borderRadius:20}} src={filterMusicas?.[0]?.artistpic}/>
              <HStack margin={2} justifyContent={"center"} padding={2}>
                <Button borderRadius={50} bg={"#1b1b1b92"}><Icon.SkipStart/></Button>
                <Button borderRadius={50} bg={"#1b1b1b92"}><Icon.Play/></Button>
                <Button borderRadius={50} bg={"#1b1b1b92"}><Icon.SkipEnd/></Button>
              </HStack>
              
            </Box>
            <FixedPlayer position={"fixed"}/>
        
      </HStack>
    </VStack>
  )
}


export default React.memo(SingleMusicPage)