import { VStack } from '@chakra-ui/react'
import React from 'react'
import Posts from '../../Pages/EditorsOnly/Posts'

export default function Main({data}) {
    const route = "post"
  return (
    <VStack flex={1} height={"100%"}>
        {route == "post" &&
        <Posts/>
        }
        
    </VStack>
  )
}
