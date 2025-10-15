import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import { useParams } from 'react-router'

 function SingleMusicPage() {
  const {id} = useParams()
  return (
    <VStack width={"100%"} height={"100%"} >
      <Nav/>
      <HStack margin={5} width={"100%"} height={"100%"} maxWidth={"min(900px, 100%)"} borderRadius={20} background={"#ffffff30"}>
        <Box>
          <Image/>
        </Box>
        <Box>
          
        </Box>

      </HStack>
      
    </VStack>
  )
}


export default React.memo(SingleMusicPage)