import {HStack,VStack } from '@chakra-ui/react/stack'
import React, { useEffect } from 'react'
import {Heading} from '@chakra-ui/react/heading'
import PostCard from '../../components/custom/PostCard'
import TextEditor from '../../components/custom/TextEditor'
import { useLogiState } from '../../states/useLogic'
import MainNews from '../../components/custom/MainNews'
function NoticiasAdmin() {
  const getNoticias = useLogiState((state)=>state.getPosts)
  const noticias = useLogiState((state)=>state.noticias)
  useEffect(()=>{
      async function getpst(){
        await getNoticias("noticias")
      }
      getpst()
    }, [])
  return (
    <VStack padding={5} background={"white"}  alignItems={"flex-start"} justifyContent={"flex-start"} width={"100%"} height={"100%"}>
      <VStack alignItems={"flex-start"}>
        <Heading>Noticias</Heading>
      </VStack>

     <TextEditor placeholder={"digite o titulo da noticia"} to={"noticias"}/>
     <HStack marginTop={10} flexWrap={"wrap"}>
          {noticias?.map((item,index)=>{
                  return(<MainNews data={item?.userdata} category={item?.category} edit={true} key={index} image={item?.imagecover} title={item?.title}/>)
          })}
        </HStack>

    </VStack>
  )
}

export default React.memo(NoticiasAdmin)
