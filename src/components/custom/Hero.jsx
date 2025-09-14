import { Button, Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
  return (
    <HStack position={"relative"} height={"70vh"} width={"100%"} backgroundColor={"white"}>
        <VStack paddingBottom={10}  background={"#0f0c0c3c"} width={"100%"} height={"100%"} paddingLeft={10} alignItems={'flex-start'} justifyContent={"flex-end"} zIndex={2}>
            <Button  margin={0} backgroundColor={"#ffffff32"} borderRadius={50}>Hip Hop</Button>
            <Heading color={"white"}>
                Kendrick Lamar
            </Heading>
        </VStack>
        
       <video loop muted autoPlay={true} style={{width:"100%",height:"100%", objectFit:"cover", position:"absolute", borderRadius:0, overlay:'auto'}} src='https://www.pexels.com/download/video/18069095/'/>
       <VStack zIndex={4} position={"absolute"} bottom={5} left={10}>
        
            <div style={{borderWidth:1,borderColor:"white",width:10, height:10, borderRadius:50,padding:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div style={{ borderRadius:50, background:"white",width:"90%", height:"90%"}}/>
            </div>
            
       </VStack>
    </HStack>
  )
}
