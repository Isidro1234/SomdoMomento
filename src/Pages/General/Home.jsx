import React, { Suspense, useEffect, useState } from 'react'
import { Button, HStack, Spinner, VStack } from '@chakra-ui/react'
import * as Icon from "react-bootstrap-icons" 
import MessageCard from '../../components/custom/MessageCard'
import SearchResults from '../../components/custom/SearchResults'
import NewsPreview from '../../components/custom/NewsPreview'
const Hero = React.lazy(()=> import("../../components/custom/Hero"))
const Nav = React.lazy(()=> import("../../components/custom/Nav"))
const RecentPosts = React.lazy(()=> import("../../components/custom/RecentPosts"))
const ArticleSection = React.lazy(()=> import("../../components/custom/ArticleSection"))
const Newslatter = React.lazy(()=> import("../../components/custom/Newslatter"))
const Footer = React.lazy(()=> import("../../components/custom/Footer"))
const MusicSection = React.lazy(()=> import("../../components/custom/MusicSection"))

export default function Home() {
  const [scrollPosition , setScrollPosition] = useState(0)
  const [hide, setHide] = useState(true)
  const dataSlide = [
    { video: "", rank: 1, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } },
    { video: "", rank: 2, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } },
    { video: "", rank: 3, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } }
  ]
  useEffect(() => {
    function handleScroll(e) {
     setScrollPosition(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <VStack   gap={0} className='Home' width={"100%"}>
        <Suspense fallback={<VStack justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"}><Spinner size={"lg"} color={'black'}/></VStack>}>
          <Nav position={"fixed"} background={scrollPosition > 40 ? "#111111c0" : "transparent"}/>
          <Hero dataSlide={dataSlide}/>
          <RecentPosts/>
          <NewsPreview/>
          <ArticleSection/>
          <Newslatter/>
          <Footer/>
        </Suspense>
        <SearchResults/>
        <MessageCard hide={hide}/>
        <Button onClick={()=>hide ? setHide(false) : setHide(true)} bg={"blue"} height={50} w={50} padding={10} position={"fixed"} zIndex={150} borderRadius={50} bottom={10} right={5}><Icon.ChatFill size={30}/></Button>
      </VStack>
  )
}
