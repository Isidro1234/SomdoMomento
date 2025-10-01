import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import NoticiasCustom from '../../components/custom/NoticiasCustom'

export default function Noticias() {
  return (
    <VStack className='noticias' width={"100%"} gap={0}>
         <Nav position={"fixed"}  background={"black"}/>
         <HStack className='mediaSmallScreen'  maxWidth={"70%"} width={"100%"} paddingTop={50}>
            <NoticiasCustom/>
         </HStack>
         
        <Footer/>
    </VStack>
  )
}
