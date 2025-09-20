import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../../components/custom/SideBar'
import Main from '../../components/custom/Main'

export default function Dashboard() {
  return (
    <HStack gap={0} height={"100%"} width={"100%"}>
      <SideBar/>
      <Main/>
    </HStack>
  )
}
