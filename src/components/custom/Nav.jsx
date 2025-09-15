import { Button, Heading, HStack, Input } from '@chakra-ui/react'
import React, { act, useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import image from "../../assets/icon2.png"
import DrawerCustom from './DrawerCustom';
export default function Nav() {
    const [activeMenu, setActiveMenu] = useState("menu")
  return (
    <HStack zIndex={4} alignItems={"center"} position={"fixed"}  padding={7} borderRadius={0}  width={"100%"}  justifyContent={"space-between"}>
        <HStack>
            <Icon.MusicNote color='white' size={30}/>
            <Heading marginLeft={-2} color={"white"}>
                 SM
            </Heading>  
        </HStack>
        <HStack  alignItems={"center"} padding={1} background={"#ffffff9a"} borderRadius={20} width={300}>
           <Input placeholder='Pesquise' border={"none"} outline={"none"}/> 
           <Icon.Search style={{marginRight:10}}/>
            
        </HStack>
        

        <DrawerCustom>
            <Icon.List color='white' size={50}/>
        </DrawerCustom>
    </HStack>
  )
}
