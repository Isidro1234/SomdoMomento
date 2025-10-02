import { VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../components/custom/Nav'
import Footer from '../../components/custom/Footer'
import MusicBody from '../../components/custom/MusicBody'
import { useLogiState } from '../../states/useLogic'
import FixedPlayer from '../../components/custom/FixedPlayer'

export default function Music() {
  const playaudio = useLogiState((state)=>state. audioplaying)
  return (
    <VStack className='music' height={"100%"} background={"gray"} width={"100%"}>
        <MusicBody/>
        <FixedPlayer isplaying={playaudio?.[4]} audio={playaudio?.[0]} artistname={playaudio?.[2]} title={playaudio?.[3]} image={playaudio?.[1]}  hide={!playaudio?.[4]} position={"fixed"}/>
    </VStack>
  )
}
