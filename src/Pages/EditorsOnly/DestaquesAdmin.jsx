import { Button, Card, Heading, HStack, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MusicCard from '../../components/custom/MusicCard'
import Article from '../General/Article'
import ArticleCard from '../../components/custom/ArticleCard'
import PostCard from '../../components/custom/PostCard'
import * as Icon from 'react-bootstrap-icons';
import ArtistCard from '../../components/custom/ArtistCard'
import TextEditor from '../../components/custom/TextEditor'
import { useLogiState } from '../../states/useLogic'
export default function DestaquesAdmin() {
  const getDestaques = useLogiState((state)=>state.getPosts)
  const destaques = useLogiState((state)=>state.destaques)
  useEffect(()=>{
      async function getpst(){
        await getDestaques("destaques")
      }
      getpst()
    }, [])
  return (
    <VStack padding={5} background={"white"} alignItems={"flex-start"} justifyContent={"flex-start"} width={"100%"} height={"100%"}>
      <VStack alignItems={"flex-start"}>
        <Heading>Destaques</Heading>
        <HStack>
          {destaques?.map((item,index)=>{
            return(<PostCard key={index} title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>)
          })}
        </HStack>
      </VStack>
      <TextEditor placeholder={"digite destaques"} to={"destaques"}/>
    </VStack>
  )
}
