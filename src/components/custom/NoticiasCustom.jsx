import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import SidebarNews from './SidebarNews'
import MainNews from './MainNews'
import Newslatter from './Newslatter'

import * as Icon from "react-bootstrap-icons"
import { useLogiState } from '../../states/useLogic'
export default function NoticiasCustom() {
  const getNoticias  = useLogiState((state)=>state.getPosts)
  const Noticias = useLogiState((state)=>state.noticias)
  useEffect(()=>{
    async function gettingNoticias(){
      await getNoticias("noticias")
    }
    gettingNoticias()
  },[])
  return (
    <VStack  paddingTop={100}   alignItems={"flex-start"} justifyContent={"flex-start"} gap={5} zIndex={1} width={"100%"}  backgroundColor={"white"}>
        <VStack width={"100%"} padding={5}>
            <Box gap={2} padding={10} flexDirection={"column"} borderRadius={10} justifyContent={"center"} alignItems={"center"} display={"flex"} width={"100%"} height={"100%"} backgroundColor={"#f6f6f6"}>
              <Heading>Noticias de Qualidade</Heading>
              <Text maxW={500} color={"gray"} textAlign={"center"}  fontSize={12}>Acompanhe as ultimas e mas novas noticias da banda, com o som do momento. Nao perca nenhuma noticia. Siga-nos nas nossas redes socias</Text>
              <HStack gap={5}>
                <Button width={10} height={10} borderRadius={50} bg={"#1f1f1fa7"}><Icon.Facebook/></Button>
                <Button width={10} height={10} borderRadius={50} bg={"#1f1f1fa7"}><Icon.Instagram/></Button>
                <Button width={10} height={10} borderRadius={50} bg={"#1f1f1fa7"}><Icon.Tiktok/></Button>
                <Button width={10} height={10} borderRadius={50} bg={"#1f1f1fa7"}><Icon.Youtube/></Button>
              </HStack>
              
            </Box>
        </VStack>
        <VStack padding={5} alignItems={"flex-start"} justifyContent={"flex-start"} gap={10} zIndex={1} width={"100%"}  backgroundColor={"white"}>
                <HStack  className='changes' display={"grid"} gridGap={10} justifySelf={"flex-start"} padding={0} width={"100%"} height={"100%"}>
                      {Noticias?.map((item, index)=>{
                        return(
                          <MainNews title={item?.title} image={item?.imagecover} category={item?.category} data={item?.userdata} key={index}/>
                        )
                      })}
                      
                      <VStack gap={5} className='sidelocation' display="grid" borderTopWidth={1} paddingTop={5}
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"  maxWidth={"100%"} minW={300} width={"100%"}>
                          {Noticias?.map((item, index)=>{
                                                                                                       
                          return(
                              item?.select !== "principal" &&
                              <SidebarNews title={item?.title} 
                              text={item?.html} image={item?.imagecover} 
                              category={item?.category} key={index}/>
                          )
                          })}
                      </VStack>
                </HStack>
                  <VStack display="grid" paddingTop={10} alignItems="flex-start" width="100%">
          <Heading borderBottomWidth={1} paddingBottom={2}>Novas Noticias</Heading>
          <HStack
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            gap={5}
            width="100%"
          >
            {Noticias?.map((item, index)=>{
                                                                                         
            return(
                 <SidebarNews title={item?.title} 
                  text={item?.html} image={item?.imagecover} 
                  category={item?.category} key={index}/>
            )
              })}
            
          </HStack>
            </VStack>
    </VStack>
    </VStack>
  )
}
