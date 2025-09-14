import React from 'react'
import { HStack, VStack } from '@chakra-ui/react'
import Nav from '../../components/custom/Nav'
export default function Home() {
  return (
      <VStack width={"100%"} height={"100%"} flex={1} >
        <Nav/>
      </VStack>
  )
}
