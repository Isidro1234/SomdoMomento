import React from 'react'
import { HStack, VStack } from '@chakra-ui/react'
import Nav from '../../components/custom/Nav'
import Hero from '../../components/custom/Hero'
export default function Home() {
  return (
      <VStack  gap={0} className='Home' width={"100%"}>
        <Nav/>
        <Hero/>
      </VStack>
  )
}
