import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {gsap} from "gsap"
import {useGSAP} from "@gsap/react"
import SidebarNews from './SidebarNews'
import * as Icon from "react-bootstrap-icons"
import { useNavigate } from 'react-router'
import AvatarCustom from './AvatarCustom'
export default function MainNews({data, isNotLink, title, image, author, name, category, userimage, edit, html}) {
    const navigate = useNavigate()
  return (
    <VStack className='animate' flex={1} onClick={()=>{!isNotLink && navigate(`/Article/News/${encodeURIComponent(String(title).trim())}`)}} alignItems={"flex-start"}  padding={0}  height={edit ?"fit-content" :  "100%"}>
                    <HStack alignItems={"center"} justifyContent={"flex-start"}>
                        <AvatarCustom name={data?.username}/>
                        <VStack gap={1} alignItems={"flex-start"}>
                            <Text fontSize={14} lineHeight={.5} fontWeight={500}>{data?.username}</Text>
                            <Text color={"gray"} fontSize={10}>Autor</Text>
                        </VStack>
                        
                    </HStack>
                    <VStack alignItems={"flex-start"}>
                      <Heading fontSize={29}>{title}</Heading>  
                      <HStack alignItems={"center"}>
                        <Text fontSize={12} color={"red"}>{category}</Text>
                        <Text fontSize={12} color={"gray"}> | </Text>
                        <Text fontSize={12} color={"gray"}>6 minutes</Text>
                      </HStack>
                    </VStack>
                    <Image borderRadius={10} minW={200} width={"100%"} height={300} src={image}/>
                    {isNotLink && <div dangerouslySetInnerHTML={{__html:html}}>

                    </div>} 
    </VStack>
  )
}
