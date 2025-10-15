import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FixedPlayer from './FixedPlayer'
import { useLogiState } from '../../states/useLogic'
import * as Icon from 'react-bootstrap-icons';
import Nav from './Nav'
import MusicSide from './MusicSide'
import MusicNav from './MusicNav'
import MusicBodyMusic from './MusicBodyMusic'
import MusicSideshow from './MusicSideshow'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Outlet, useParams } from 'react-router';

export default function MusicBody() {
  const gettingmusic = useLogiState((state)=>state.getMusic)
  const music = useLogiState((state)=>state.sections)
  const [show, setShow] = useState(false)
  const playsong = useLogiState((state)=>state.audioplaying)
  const getPromo = useLogiState((state)=>state.getPromotion);
  const musicpromo = useLogiState((state)=>state.musicPromo)
  const {id} = useParams()
  useEffect(()=>{
    async function gett(){
      await gettingmusic()
      await getPromo("Musicas")
    }
    gett()
  },[])
  useGSAP(()=>{
      gsap.from('.anim',{
        yoyo:true,
            x:-200,
            duration:3,
            ease:"bounce",
      })
  },[])
  return (
    <VStack height={"100%"} background={"black"}  gap={1} padding={1} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(300px,100%), 1fr))"} width={"100%"}>
      
      <HStack className='first' background={"black"} height={"100%"}  display={"grid"} gridTemplateColumns={"minmax(200px, 300px) minmax(300px, 1fr)"}  width={"100%"} >
        <MusicSide/>
      <VStack className='anim'  minW={100}  height={"100%"} >
          <MusicNav musicdata={musicpromo}/>
          <MusicBodyMusic/>
        </VStack>
      </HStack>
      <HStack className='showingit' width={"100%"} height={"100%"} padding={1}>
        <MusicSideshow/>
      </HStack>
      
      <HStack minW={100} display={"none"} width={"100%"}>
        <FixedPlayer position={"relative"}/>
      </HStack>
  
    </VStack>
  )
}
