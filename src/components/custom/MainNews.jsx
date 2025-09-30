import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {gsap} from "gsap"
import {useGSAP} from "@gsap/react"
import SidebarNews from './SidebarNews'
import * as Icon from "react-bootstrap-icons"
export default function MainNews() {
    useGSAP(()=>{
        gsap.from(".animate",{
            rotateX:50,
            duration:2,
            ease:"bounce",
            yoyo:true
        })
    },[])
  return (
    <VStack className='animate' flex={1} alignItems={"flex-start"}  padding={0}  height={"100%"}>
                    <HStack alignItems={"center"} justifyContent={"flex-start"}>
                        <Image borderRadius={10} height={10} width={10} src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'/>
                        <VStack gap={1} alignItems={"flex-start"}>
                            <Text fontSize={14} lineHeight={.5} fontWeight={500}>Name</Text>
                            <Text color={"gray"} fontSize={10}>Autor</Text>
                        </VStack>
                        
                    </HStack>
                    <VStack alignItems={"flex-start"}>
                      <Heading fontSize={29}>Woman's Baskeball team</Heading>  
                      <HStack alignItems={"center"}>
                        <Text fontSize={12} color={"red"}>Sports</Text>
                        <Text fontSize={12} color={"gray"}> | </Text>
                        <Text fontSize={12} color={"gray"}>6 minutes</Text>
                      </HStack>
                    </VStack>
                    <Image borderRadius={10} minW={200} width={"100%"} height={300} src='https://images.pexels.com/photos/3425993/pexels-photo-3425993.jpeg'/>
    </VStack>
  )
}
