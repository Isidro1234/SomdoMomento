import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import * as Icon from 'react-bootstrap-icons';
import AnimateNumber from './AnimateNumber';
export default function Slide({ width, currentSlide , rank ,category, artistname, streams, musictitle, videourl, artistpic, socialLinks, publishedate }) {
  const videoRef = useRef(null)
  const convdata = publishedate.seconds * 1000;
  function timeSince(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const seconds = Math.floor((now - past) / 1000);

  const intervals = [
    { label: "ano", seconds: 31536000 },
    { label: "mes", seconds: 2592000 },
    { label: "semana", seconds: 604800 },
    { label: "dia", seconds: 86400 },
    { label: "hora", seconds: 3600 },
    { label: "minuto", seconds: 60 },
    { label: "segundo", seconds: 1 }
  ];

  for (let interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} atras`;
    }
  }

  return "agora";
}
  useEffect(() => {
    if (videoRef.current && videourl) {
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
      <VStack width={"100%"} >
        <VStack  
            className='mediaSmallScreenHero'
            maxWidth={"70%"}
            paddingBottom={10}
            width={width}
            height={'100%'}
            paddingLeft={10}
            alignItems={'flex-start'}
            justifyContent={'flex-end'}
            position={"relative"}
            zIndex={2}
          >
            <Image  marginLeft={-5} marginBottom={5} src={artistpic} height={150} width={150} borderRadius={90}/>
                    <Button className='contenthero'
              margin={0}
              backgroundColor={'#ffffff32'}
              borderRadius={50}
            
            >
              {category}
            </Button>
            <Heading className='contenthero' lineHeight={.5} color={'white'}>{artistname}</Heading>
            <Text className='contenthero' color={"white"} zIndex={100} fontWeight={300}>{musictitle}</Text>
            <AnimateNumber target={streams || 0} currentSlide={currentSlide}/>
            <HStack className='contenthero' alignItems={"center"} gap={2} zIndex={100}>
                <Icon.Spotify color='white'/>
                <Icon.AppleMusic color='white'/>
            </HStack>
          </VStack>
      </VStack>
      

      {/* Video */}
      {videourl && 
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
        src={videourl}
      /> }
      {!videourl && <Image src={artistpic} style={{
          width: width,
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          borderRadius: 0,
        }}/>}
        <VStack position={"absolute"}  height={"100%"} justifyContent={"center"} alignItems={"center"} width={"100%"} zIndex={200}>
          <VStack className='mediaSmallScreenHero' width={"100%"} height={"100%"} zIndex={100} maxW={"70%"} justifyContent={"center"} alignItems={"flex-end"}>
             <VStack alignItems={"center"} gap={5} justifyContent={"center"}  height={"30%"}  borderBottomLeftRadius={0} borderTopLeftRadius={0} zIndex={10} padding={10} backgroundColor={"#4f4cfdff"}  >
                        <Heading textAlign={"center"} marginTop={2} color={"white"} fontSize={40}>TOP {rank}</Heading>
                        <Text fontWeight={300} textAlign={"center"} color={"white"} fontSize={17}>ha {timeSince(convdata)}</Text>
                  </VStack>
          </VStack>
         

        </VStack>
        
    </div>
  )
}
