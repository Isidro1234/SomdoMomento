import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import Main from '../../components/custom/Main'
import MainArticle from '../../components/custom/MainArticle'

export default function Article() {
  return (
    <VStack height={"100%"}>
      <Nav background={"blue"}/>
      <HStack height={"100%"}>
        <MainArticle data={"f"}/>
      </HStack>
      <Footer/>
    </VStack>
  )
}
