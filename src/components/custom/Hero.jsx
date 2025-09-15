import { Button, Heading, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import Paginator from './Paginator'

export default function Hero() {
    const width = window.screen.width
    const [currentSlide, setCurrentSlide] = useState(0)
    const dataSlide = [{
        video:"",
        rank:1,
        artist:{
            name:"",
        },
        music:{
            title:"",
            image:"",
            publishedDate:""
        }
    },{
        video:"",
        rank:1,
        artist:{
            name:"",
        },
        music:{
            title:"",
            image:"",
            publishedDate:""
        }
    },{
        video:"",
        rank:1,
        artist:{
            name:"",
        },
        music:{
            title:"",
            image:"",
            publishedDate:""
        }
    }]
    console.log(width)
    function nextSlide(){
        setCurrentSlide((prev)=> prev === dataSlide.length - 1 ? 0 : prev + 1)
    }
     useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 10000)

    return () => clearInterval(interval) // cleanup
  }, [dataSlide.length])
  return (
    <HStack  position={"relative"} height={"70vh"} width={"100%"} backgroundColor={"white"}>
        <HStack gap={0} transform={`translateX(-${currentSlide * width}px)`} transition="transform 0.5s ease"  width={`${width * dataSlide.length}`}  height={"100%"} position={"relative"}>
        {dataSlide.map((item,index)=>{
            return(
              <Slide width={width} key={index} currentSlide={currentSlide == index && true}/>  
            )
        })}
        </HStack>
        <HStack zIndex={7} position={"absolute"} bottom={15} left={10}>
            {dataSlide.map((item,index)=>{
            return(
              <Paginator key={index} current={currentSlide == index && true}/> 
            )
        })}
        </HStack>
            
       
    </HStack>
  )
}
