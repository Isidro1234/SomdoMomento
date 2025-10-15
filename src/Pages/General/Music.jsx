import {VStack} from '@chakra-ui/react'
import React from 'react'
import MusicBody from '../../components/custom/MusicBody'
import { useLogiState } from '../../states/useLogic'
import FixedPlayer from '../../components/custom/FixedPlayer'
import { Outlet, useParams } from 'react-router'

export default function Music() {
  const playaudio = useLogiState((state)=>state. audioplaying)
  const {id} = useParams()
  return (
    <VStack className='music'  background={"black"} width={"100%"}>
      {id ? <Outlet/> : <MusicBody/>}
        <FixedPlayer isplaying={playaudio?.[4]} audio={playaudio?.[0]} artistname={playaudio?.[2]} title={playaudio?.[3]} image={playaudio?.[1]}  hide={!playaudio?.[4]} position={"fixed"}/>
    </VStack>
  )
}

