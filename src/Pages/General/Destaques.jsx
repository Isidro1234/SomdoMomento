import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import { useGSAP } from '@gsap/react'

export default function Destaques() {
 
  return (
    <VStack className='Destaques' width={"100%"} >
      <Nav background={"black"}/>
        <HStack height={"100vh"} width={"100%"} display={"grid"} gridTemplateColumns={"repeat(autofill, minmax(400px, 1fr))"} padding={2}>
            <VStack >
              sfdf
            </VStack>
            <VStack>
              <Box minHeight={300} padding={5} borderWidth={1} width={"100%"} borderRadius={10}>
                sdfsfsdf
              </Box>
            </VStack>
            <VStack >
              sdfdf
            </VStack>
        </HStack>
        <Footer/>
    </VStack>
  )
}
