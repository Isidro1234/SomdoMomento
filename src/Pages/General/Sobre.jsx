import { VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'

export default function Sobre() {
  return (
    <VStack>
         <Nav position={"relative"} background={"blue"}/>
        <Footer/>
    </VStack>
  )
}
