import { Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Aside from './Aside'
import ArticleCard from './ArticleCard'
import { useLogiState } from '../../states/useLogic'

 function ArticleSection() {
     const getpost = useLogiState((state)=>state.getPosts)
     const posts = useLogiState((state)=>state.posts)
 
  useEffect(()=>{
    async function getpst(){
      await getpost("postes")
    }
    getpst()
  }, [])
  return (
    <VStack  padding={4} gap={4} justifyContent={"flex-start"} alignItems={"center"} background={"#fefdfdff"}  width={"100%"}>
        <VStack className='mediaSmallScreen' alignItems={"flex-start"} justifyContent={"flex-start"} width={"100%"} maxWidth={"70%"}>
        <VStack alignSelf={"center"} padding={5}>
          <Heading >Artigos</Heading>
          <HStack>
            <Text color={"red"} fontSize={10}> Top </Text>
            <Text color={"gray"} fontSize={10}> | </Text>
            <Text color={"gray"} fontSize={10}> 22 recentes</Text>
          </HStack>
        </VStack>
        
        <HStack justifyContent={"flex-start"} gap={4} flexWrap={"wrap"} width={"100%"} alignItems={"center"}>
            <VStack gap={4} flex={1}  alignItems={"flex-start"}>
                 {posts?.map((item,index)=>{
                return(
                   index < 4 &&
                   <ArticleCard key={index}
                    title={item.title} 
                    date={item.date} 
                    author={item.userdata.username}
                    body={item.html}
      />  
                )
            })}
            </VStack>
           
           
            <Aside posts={posts}/>
        </HStack>
        
        </VStack> 
        
    </VStack>
  )
}
export default React.memo(ArticleSection);