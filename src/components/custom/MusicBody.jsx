import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SideBarCustom from './SideBarCustom'
import CustomMain from './CustomMain'
import FixedPlayer from './FixedPlayer'
import { useLogiState } from '../../states/useLogic'
import * as Icon from 'react-bootstrap-icons';
import Nav from './Nav'
import MusicSide from './MusicSide'
import MusicNav from './MusicNav'
import MusicBodyMusic from './MusicBodyMusic'

export default function MusicBody() {
  const gettingmusic = useLogiState((state)=>state.getMusic)
  const music = useLogiState((state)=>state.sections)
  const [show, setShow] = useState(false)
  const playsong = useLogiState((state)=>state.audioplaying)
  useEffect(()=>{
    async function gett(){
      await gettingmusic()
    }
    gett()
  },[])
  console.log(playsong)
  return (
    <VStack background={"black"} gap={1} padding={1} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(300px,100%), 1fr))"} width={"100%"} height={"100%"}>
      
      <HStack className='first' background={"black"} display={"grid"} gridAutoFlow={"row"} gridTemplateColumns={"minmax(200px, 300px) minmax(300px, 1fr)"}  width={"100%"} height={"100%"}>
        <MusicSide/>
        <VStack minW={100}  height={"100%"} >
          <MusicNav/>
          <MusicBodyMusic/>
        </VStack>
      </HStack>
      <HStack minW={100} display={"none"} width={"100%"}>
        <FixedPlayer position={"relative"}/>
      </HStack>
  
    </VStack>
  )
}
