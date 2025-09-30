import { VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import MusicBody from '../../components/custom/MusicBody'

export default function Music() {
  return (
    <VStack className='music' height={"100%"} background={"gray"} width={"100%"}>
        <MusicBody/>
    </VStack>
  )
}
