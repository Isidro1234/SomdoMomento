import { Button, Heading, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'

export default function Slide({width,currentSlide}) {
    const videoRef = useRef(null)
    useEffect(()=>{
        if(currentSlide){
          videoRef.current.play()  
        }
    }, [currentSlide])
  return (
    <div style={{position:'relative', width, height:"100%", display:"flex"}}>
      <VStack paddingBottom={10}  background={"#0f0c0c3e"} width={width} height={"100%"} paddingLeft={10} alignItems={'flex-start'} justifyContent={"flex-end"} zIndex={2}>
      <Button  margin={0} backgroundColor={"#ffffff32"} borderRadius={50}>Hip Hop</Button>
                    <Heading color={"white"}>
                        Kendrick Lamar
                    </Heading>
     </VStack>
    <video ref={videoRef} loop muted style={{width:width,height:"100%", objectFit:"cover", position:"absolute", borderRadius:0, overlay:'auto'}} src='https://www.pexels.com/download/video/18069095/'/>
    </div>       
  )
}
