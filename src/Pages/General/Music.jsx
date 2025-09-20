import { VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import MusicBody from '../../components/custom/MusicBody'

export default function Music() {
  return (
    <VStack height={"100%"}>
        <Nav position={"relative"} background={"blue"}/>
        <MusicBody/>
        <Footer/>
    </VStack>
  )
}
