import React, { useEffect, useState } from 'react'
import { HStack, VStack } from '@chakra-ui/react'
import Nav from '../../components/custom/Nav'
import Hero from '../../components/custom/Hero'
import RecentPosts from '../../components/custom/RecentPosts'
import ArticleSection from '../../components/custom/ArticleSection'
import Newslatter from '../../components/custom/Newslatter'
import Footer from '../../components/custom/Footer'
export default function Home() {
  const [scrollPosition , setScrollPosition] = useState(0)
  useEffect(() => {
    function handleScroll(e) {
     setScrollPosition(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
      <VStack gap={0} className='Home' width={"100%"}>
        <Nav position={"fixed"} background={scrollPosition > 40 ? "#252525c0" : "transparent"}/>
        <Hero/>
        <RecentPosts/>
        <ArticleSection/>
        <Newslatter/>
        <Footer/>
      </VStack>
  )
}
