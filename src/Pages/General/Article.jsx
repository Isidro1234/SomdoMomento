import { HStack, VStack } from '@chakra-ui/react/stack'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import { Outlet } from 'react-router'

 function Article() {
  return (
    <VStack className='Article' height={"100%"} width={"100%"}>
      <Nav background={"blue"}/>
      <HStack width={"100%"}  height={"100%"}>
        <Outlet/>
      </HStack>
      <Footer/>
    </VStack>
  )
}
export default React.memo(Article)
