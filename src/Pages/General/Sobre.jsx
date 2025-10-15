import { Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import { useLogiState } from '../../states/useLogic'

 function Sobre() {
  const getting  = useLogiState((state)=>state.getAbout);
  const aboutinfo = useLogiState((state)=>state.about)
  useEffect(()=>{
    async function gettingdata(){
     await getting() 
    }
    gettingdata()
  },[])
  return (
    <VStack className='sobre' width={"100%"}>
         <Nav position={"relative"} background={"black"}/>
         <VStack alignItems={"flex-start"} padding={10} borderWidth={1} maxHeight={400} width={"100%"} maxWidth={400} borderRadius={10} height={"80vh"}>
            <Heading>Sobre Nos</Heading>
            <Text>{aboutinfo?.[0]?.description}</Text>
         </VStack>
        <Footer/>
    </VStack>
  )
}

export default React.memo(Sobre)