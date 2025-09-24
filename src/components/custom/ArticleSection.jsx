import { Heading, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Aside from './Aside'
import ArticleCard from './ArticleCard'
import { useLogiState } from '../../states/useLogic'

 function ArticleSection() {
     const getpost = useLogiState((state)=>state.getPosts)
     const posts = useLogiState((state)=>state.post)
 
  useEffect(()=>{
    async function getpst(){
      await getpost("postes")
    }
    getpst()
  }, [])
  return (
    <VStack padding={4} justifyContent={"flex-start"} alignItems={"flex-start"} background={"#f6f6f6"}  width={"100%"}>
        <Heading>Artigos Recentes</Heading>
        <HStack flexWrap={"wrap"} width={"100%"} alignItems={"center"}>
            <VStack flex={1}>
                 {posts?.map((item,index)=>{
                return(
                   index <= 5 &&
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
  )
}
export default React.memo(ArticleSection);