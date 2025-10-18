import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import * as Icon from 'react-bootstrap-icons';
import AnimateNumber from './AnimateNumber';
export default function Slide({ width,iframevid, currentSlide , rank ,category, artistname,
   streams, musictitle, videourl, artistpic, socialLinks, publishedate }) {
  const videoRef = useRef(null)
  const convdata = publishedate?.seconds * 1000 || 1000;
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
    <div className='video-background'
      style={{
        position: 'relative',
        width,
        height: '100%',
        display: 'flex',
      }}
    >
      
      {/* Overlay */}
      <VStack width={"100%"} zIndex={1000}>
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
            <HStack className='contenthero' alignItems={"center"} gap={2} zIndex={1000}>
              {[socialLinks]?.map((item,index)=>{
                  
                return(
                  <HStack zIndex={100} key={index}>
                  { item?.youtube &&
                  <Icon.Youtube style={{zIndex:100, cursor:"pointer"}} onClick={()=>{window.location.href=item?.youtube}} color='white'/>}
                 { item?.spotify &&
                  <Icon.Spotify style={{zIndex:100}} onClick={()=>{window.location.href=item?.spotify}} color='white'/>}
                  { item?.applemusic &&
                  <Icon.AppleMusic style={{zIndex:100}} onClick={()=>{window.location.href=item?.applemusic}} color='white'/>}
                  </HStack>
                 
                )
              })}
                
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
          left:0,
          borderRadius: 0,
        }}
        src={videourl}
      /> }
      {iframevid && (
          <VStack justifyContent={"center"} position={"absolute"} left={0} top={0} width={"100%"} height={"100%"}>
       
            <iframe 
              allowFullScreen={true} 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
             style={{ zIndex:11, backgroundColor:"tranparent",
     width:"100%", display:"flex", alignSelf:"center",
     height:"100%",

    }}
            src={`https://www.youtube.com/embed/${iframevid}&controls=0`}
            />
           <Image zIndex={10} src={artistpic} width={"100%"} height={"100%"} position={"absolute"} left={0} 
           top={0}/>    </VStack>
)}
      {(!videourl &&  !iframevid) && <Image src={artistpic} style={{
          width: width,
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          borderRadius: 0,
        }}/>}
        <VStack position={"absolute"}  height={"100%"} justifyContent={"center"} alignItems={"center"} width={"100%"} zIndex={200}>
          <VStack className='mediaSmallScreenHero' width={"100%"} height={"100%"} zIndex={100} maxW={"70%"} justifyContent={"center"} alignItems={"flex-end"}>
             <VStack alignItems={"center"} gap={5} justifyContent={"center"}  height={"30%"}  borderBottomLeftRadius={0} borderTopLeftRadius={0} zIndex={10} padding={10} backgroundColor={"#4f4cfdff"}  >
                        <Heading textAlign={"center"} marginTop={2} color={"white"} fontSize={30}>TOP {rank}</Heading>
                        <Text fontWeight={300} textAlign={"center"} color={"white"} fontSize={10}>ha {timeSince(convdata)}</Text>
                  </VStack>
          </VStack>
         

        </VStack>
        
    </div>
  )
}
