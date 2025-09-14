import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router'

export default function ProtectedRoute() {
  const user = false
  return (
    <>
    {!user ?
        <VStack>
            please log in
        </VStack>
        :
        <Outlet/>
    }
    </>
  )
}
