import { Button, Card, Heading, HStack, Input, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import MusicCard from '../../components/custom/MusicCard'
import Article from '../General/Article'
import ArticleCard from '../../components/custom/ArticleCard'
import PostCard from '../../components/custom/PostCard'
import * as Icon from 'react-bootstrap-icons';
import ArtistCard from '../../components/custom/ArtistCard'
export default function NoticiasAdmin() {
  return (
    <VStack padding={5} background={"white"} alignItems={"flex-start"} justifyContent={"flex-start"} width={"100%"} height={"100%"}>
      <VStack alignItems={"flex-start"}>
        <Heading>Noticias</Heading>
        <HStack>
           <PostCard title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>
           <PostCard title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>
           <PostCard title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>
           <PostCard title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>
        </HStack>
      </VStack>
      <Card.Root padding={0}  width={"100%"} flex={1}>
        <Card.Body padding={5} gap={4}>
          <HStack  flex={1} padding={1}>
            <HStack margin={0} padding={0} gap={5} flex={1}>
              <Icon.Image/>
              <Icon.Upload/>
              <Icon.TypeBold/>
              <Icon.TypeItalic/>
              <Icon.TypeH1/>
            </HStack>
            <Input flex={.3} placeholder='Titulo do Artigo'/>
          </HStack>
          <Textarea placeholder='Digite o seu poste' minHeight={100} maxHeight={140}></Textarea>
          <Button alignSelf={"flex-end"} borderRadius={50}>Postar</Button>
        </Card.Body>
      </Card.Root>

    </VStack>
  )
}
