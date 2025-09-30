import { Button, Heading, HStack, Input, Text } from '@chakra-ui/react'
import React, { act, useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import image from "../../assets/icon2.png"
import DrawerCustom from './DrawerCustom';
import { useNavigate } from 'react-router';
export default function Nav({position, background, searchbarColor, serchiconColor, color}) {
    const [activeMenu, setActiveMenu] = useState("menu");
    const navigate = useNavigate()
  return (
    <HStack   background={background} zIndex={74} alignItems={"center"} position={position}  padding={7} borderRadius={0}  width={"100%"} left={0}  justifyContent={"space-between"}>
        <HStack onClick={()=>navigate("/")}>
            <Icon.MusicNote color='white' size={30}/>
            <Heading marginLeft={-2} color={"white"}>
                 SM
            </Heading>  
        </HStack>
        <HStack  position={"relative"}  alignItems={"center"} padding={1} background={searchbarColor || "#ffffff9a"} borderRadius={20} width={300}>
           <Input color={color || 'black'} zIndex={200} placeholder='Pesquise' border={"none"} outline={"none"}/> 
           <Icon.Search  color={serchiconColor || "black"} style={{marginRight:10, zIndex:200}}/>
            <HStack hidden={true}  zIndex={-1} bottom={-90} borderRadius={10} backgroundColor={"white"} width={"100%"} height={100} position={"absolute"}>
            <Text>Hello world</Text>
            </HStack>
        </HStack>
        

        <DrawerCustom>
            <Icon.List color='white' size={50}/>
        </DrawerCustom>
    </HStack>
  )
}
