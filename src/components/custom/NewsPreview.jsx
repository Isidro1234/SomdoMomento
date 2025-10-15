import React, { useEffect } from 'react'
import SidebarNews from './SidebarNews'
import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import MainNews from './MainNews'
import { useLogiState } from '../../states/useLogic'


export default function NewsPreview() {
    const getNoticias  = useLogiState((state)=>state.getPosts)
    const Noticias = useLogiState((state)=>state.noticias)
    useEffect(()=>{
      async function gettingNoticias(){
        await getNoticias("noticias")
      }
      gettingNoticias()
    },[])
  return (
    <VStack className='news' width={"100%"} paddingBottom={20}>
       <VStack className='mediaSmallScreen' maxWidth={"70%"} width={"100%"}>
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
                                  <Box className='sidelocation' borderRadius={10}  alignSelf={"flex-start"} gridColumnGap={10} gridRowGap={10} display={"grid"} gridGap={10} gridTemplateColumns={"repeat(auto-fit, minmax(min(300px, 100%),1fr))"} padding={0}>
                                     {Noticias?.map((item, index)=>{
                                            
                                           return(
                                              item?.select !== "principal" &&
                                               <SidebarNews/>
                                             )
                                          })}
                                     
            
                                  </Box>
                                </VStack>
                </VStack> 
    </VStack>
    
  )
}
