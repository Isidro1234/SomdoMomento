import {HStack} from '@chakra-ui/react/stack'
import React from 'react'
import SideBar from '../../components/custom/SideBar'
import Main from '../../components/custom/Main'

 function Dashboard() {
  return (
    <HStack gap={0} height={"100%"} width={"100%"}>
      <SideBar/>
      <Main/>
    </HStack>
  )
}
export default React.memo(Dashboard)