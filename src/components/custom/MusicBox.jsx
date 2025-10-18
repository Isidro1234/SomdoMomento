import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import * as Icon from "react-bootstrap-icons"
import { useLogiState } from '../../states/useLogic'
export default function MusicBox({image, artistname, title , audio}) {
    const [isplaying, setPlaying] = useState(false)
    const setplaying = useLogiState((state)=>state.setplaysongbottom)
    const setHistoricoPlay = useLogiState((state)=>state.setHistoricoplay)
   async function handleplay(){
        isplaying ? setPlaying(false) : setPlaying(true)
        setplaying(audio, image, artistname, title, isplaying)
        console.log(isplaying)
        const result = await  setHistoricoPlay(audio, image, artistname, title)
    }
  return (
    <Box className='musicbox' position={"relative"} display={"flex"}  minWidth={150} flexDirection={"column"}>
                <Image onClick={()=>{navigate(`/Music/Single/${encodeURIComponent(String(title).trim())}`)}} borderRadius={10} width={150} height={140} src={image} alt='Cover'/>
                <Box>
                    <Heading>{artistname}</Heading>
                    <Text fontSize={12}>{title}</Text>
                </Box>
                <Box onClick={handleplay} display={"flex"} justifyContent={"center"} alignItems={"center"}  style={{bottom:70}} right={5} position={"absolute"} backgroundColor={"white"} borderRadius={50} padding={3}>
                   {!isplaying ?
                   <Icon.PlayFill size={20}  color='lightgreen'/> :
                   <Icon.PauseFill size={20}  color='lightgreen'/>
                }
                   
                </Box>
            </Box>
  )
}
