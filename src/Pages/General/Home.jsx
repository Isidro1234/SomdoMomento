import React, { Suspense, useState } from 'react'
import {VStack} from '@chakra-ui/react/stack'
import { Button }from '@chakra-ui/react/button'
import { Spinner } from '@chakra-ui/react/spinner'
import * as Icon from "react-bootstrap-icons" 
import MessageCard from '../../components/custom/MessageCard'
import SearchResults from '../../components/custom/SearchResults'
import NewsPreview from '../../components/custom/NewsPreview'
import FixedPlayer from '../../components/custom/FixedPlayer'
import { useLogiState } from '../../states/useLogic'
const Hero = React.lazy(()=> import("../../components/custom/Hero"))
const Nav = React.lazy(()=> import("../../components/custom/Nav"))
const RecentPosts = React.lazy(()=> import("../../components/custom/RecentPosts"))
const ArticleSection = React.lazy(()=> import("../../components/custom/ArticleSection"))
const Newslatter = React.lazy(()=> import("../../components/custom/Newslatter"))
const Footer = React.lazy(()=> import("../../components/custom/Footer"))
const MusicSection = React.lazy(()=> import("../../components/custom/MusicSection"))

function Home() {
  const [hide, setHide] = useState(true)
  const playaudio = useLogiState((state)=>state. audioplaying)
  const dataSlide = [
    { video: "", rank: 1, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } },
    { video: "", rank: 2, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } },
    { video: "", rank: 3, artist: { name: "" }, music: { title: "", image: "", publishedDate: "" } }
  ]
  return (
      <VStack   gap={0} className='Home' width={"100%"}>
        <Suspense fallback={<VStack justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"}><Spinner size={"lg"} color={'black'}/></VStack>}>
          <Nav  position={"fixed"} background={"transparent"}/>
          <Hero dataSlide={dataSlide}/>
          <RecentPosts/>
          <NewsPreview/>
          <ArticleSection/>
          <Newslatter/>
          <Footer/>
        </Suspense>
        <SearchResults/>
        <FixedPlayer isplaying={!playaudio?.[4]} audio={playaudio?.[0]} artistname={playaudio?.[2]}
         title={playaudio?.[3]} image={playaudio?.[1]}  hide={!playaudio?.[4]} position={"fixed"}/>
      </VStack>
  )
}
export default  React.memo(Home)
