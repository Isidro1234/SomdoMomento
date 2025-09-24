import {HStack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Paginator from './Paginator'
import Slide from "./Slide"
import { useLogiState } from '../../states/useLogic'
export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth)
  const [currentSlide, setCurrentSlide] = useState(0)
  const gettingSlides = useLogiState((state)=>state.getSlides)
  const slides = useLogiState((state)=>state.slides)
  // Handle window resize
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  useEffect(()=>{
        async function getting(){
            const result = await gettingSlides()
        }
        getting()
    }, [])
  // Auto-slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 10000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <HStack className='hero' position="relative" height="70vh" width="100%" overflow="hidden" backgroundColor="white">
      <HStack
        gap={0}
        transform={`translateX(-${currentSlide * width}px)`}
        transition="transform 0.5s ease"
        width={`${width * slides.length}px`}
        height="100%"
      >
           {slides.map((item, index) => (
        <Slide category={item.Category} key={index} rank={item.rank} socialLinks={item.socialLinks} streams={item.numeroPlays} publishedate={item.date} id={item.id} musictitle={item.musica} videourl={item.video} artistpic={item?.image} artistname={item?.nome} width={width} currentSlide={currentSlide === index}/>
        ))}
      
      </HStack>
      <HStack zIndex={7} position="absolute" bottom={15} left={10}>
        {slides.map((_, index) => (
          <Paginator key={index} current={currentSlide === index} />
        ))}
      </HStack>
    </HStack>
  )
}
