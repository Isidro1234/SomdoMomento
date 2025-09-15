import { HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import Paginator from './Paginator'

export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth)
  const [currentSlide, setCurrentSlide] = useState(0)

  const dataSlide = [
    { video: "", rank: 1, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } },
    { video: "", rank: 1, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } },
    { video: "", rank: 1, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } }
  ]

  // Handle window resize
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === dataSlide.length - 1 ? 0 : prev + 1))
    }, 10000)
    return () => clearInterval(interval)
  }, [dataSlide.length])

  return (
    <HStack position="relative" height="70vh" width="100%" overflow="hidden" backgroundColor="white">
      <HStack
        gap={0}
        transform={`translateX(-${currentSlide * width}px)`}
        transition="transform 0.5s ease"
        width={`${width * dataSlide.length}px`}
        height="100%"
      >
        {dataSlide.map((item, index) => (
          <Slide width={width} key={index} currentSlide={currentSlide === index} />
        ))}
      </HStack>

      {/* Pagination dots */}
      <HStack zIndex={7} position="absolute" bottom={15} left={10}>
        {dataSlide.map((_, index) => (
          <Paginator key={index} current={currentSlide === index} />
        ))}
      </HStack>
    </HStack>
  )
}
