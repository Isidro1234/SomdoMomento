import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import * as Icon from 'react-bootstrap-icons';
import AnimateNumber from './AnimateNumber';
export default function Slide({ width, currentSlide , rank }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      if (currentSlide) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [currentSlide])

  return (
    <div
      style={{
        position: 'relative',
        width,
        height: '100%',
        display: 'flex',
      }}
    >
      {/* Overlay */}
      <VStack
        paddingBottom={10}
        background={'#0f0c0c3e'}
        width={width}
        height={'100%'}
        paddingLeft={10}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        zIndex={2}
      >
        <Image style={{width:140, height:140, borderRadius:100, marginLeft:-5}} src='https://upload.wikimedia.org/wikipedia/en/6/6a/PartyNextDoor_and_Drake_-_Some_Sexy_Songs_4_U.png'/>
        <Button
          margin={0}
          backgroundColor={'#ffffff32'}
          borderRadius={50}
        >
          Hip Hop
        </Button>
        <Heading lineHeight={.5} color={'white'}>Kendrick Lamar</Heading>
        <Text color={"white"}>Squablle up</Text>
        <AnimateNumber target={10000} currentSlide={currentSlide}/>
        <HStack alignItems={"center"} gap={2}>
            <Icon.Spotify color='white'/>
            <Icon.AppleMusic color='white'/>
        </HStack>
      </VStack>

      {/* Video */}
      <video
        playsInline
        ref={videoRef}
        loop
        muted
        style={{
          width: width,
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          borderRadius: 0,
        }}
        src="https://www.pexels.com/download/video/18069095/"
      />
         <VStack alignItems={"center"} justifyContent={"center"} width={150} zIndex={10} padding={10} backgroundColor={"#7c18ffff"} position={"absolute"} right={0} top={"40%"}>
              <Heading marginTop={2} color={"white"} fontSize={40}>{rank}#</Heading>
              <Text textAlign={"center"} color={"white"} fontSize={10}>há 2 semanas</Text>
           </VStack>
    </div>
  )
}
