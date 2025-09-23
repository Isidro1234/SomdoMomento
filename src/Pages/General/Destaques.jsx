import { VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'

export default function Destaques() {
  return (
    <VStack className='Destaques' width={"100%"}>
         <Nav position={"relative"} background={"blue"}/>
        <Footer/>
    </VStack>
  )
}
