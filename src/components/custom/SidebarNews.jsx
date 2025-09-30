import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export default function SidebarNews({withbars}) {
    useGSAP(()=>{
        gsap.to('.news',{
            yoyo:true,
            opacity:1,
            duration:3,
            ease:"bounce",
            marginRight:0
        })
    },[])
  return (
    <HStack className='news' opacity={0} borderBottomWidth={withbars ? 1 : 0} paddingBottom={withbars ? 2 : 0} gap={4} display={"grid"} gridTemplateColumns={"repeat(auto-fit , minmax(min(200px, 100%), 1fr ))"}>
                    <VStack  flex={1} gap={2} alignItems={"flex-start"} >
                        <Heading fontSize={14} lineHeight={1.3}>Boom, Boom :Snoop on break dance 2024</Heading>
                        <Text fontSize={12} color={"gray"} >
                            Snoop dogg appearance on the onlympics
                            becomes the espectacle of the show
                        </Text>
                        <HStack alignItems={"center"}>
                            <Text fontSize={12} color={"red"}>Sports</Text>
                            <Text fontSize={12} color={"gray"}> | </Text>
                            <Text fontSize={12} color={"gray"}>6 minutes</Text>
                        </HStack>
                    </VStack>
                    <Image className='picstyle' float={"right"}  borderRadius={10} maxH={150} src='https://images.pexels.com/photos/3425993/pexels-photo-3425993.jpeg'/>
                </HStack>
  )
}
