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
import { Helmet } from 'react-helmet-async'
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
        <Helmet>
          <meta property="og:title" content={"Som do momento - Home"} />
          <meta property="og:description" content={`O Som do Momento é um blog dedicado
             à música angolana e aos seus talentos. Aqui destacamos artistas locais, 
             novos lançamentos, estilos como kizomba, kuduro, semba e afrohouse, 
             além de entrevistas e críticas musicais. Celebramos a cultura de 
             Angola e o som vibrante que define a nossa identidade.`} />
          <meta property="og:keywords" content={`musicas, soms, angola, portugal, brazil, musicas do meomento, musicas da banda, melhores soms de angola,
            baixar musicas angolanas, baixar sons, som do momento, sm, som momento, danca com momento, som`} />
          <meta property="og:url" content={"https://somdomomento.netlify.app/"} />
          <meta property="og:type" content="homepage" />
          <title>Som do momento - Home</title>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>

        </Helmet>
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
        <FixedPlayer isplaying={!playaudio?.[4]} audio={playaudio?.[0]} 
        artistname={playaudio?.[2]}
         title={playaudio?.[3]} image={playaudio?.[1]}  hide={!playaudio?.[4]} position={"fixed"}/>
      </VStack>
  )
}
export default  React.memo(Home)
