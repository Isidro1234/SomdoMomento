import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { act, useEffect, useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import image from "../../assets/icon2.png"
import DrawerCustom from './DrawerCustom';
import { useNavigate } from 'react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLogiState } from '../../states/useLogic';
export default function Nav({position, background, searchbarColor, serchiconColor, color}) {
    const [activeMenu, setActiveMenu] = useState("menu");
    const [showrecommendation, setShowrecommendation] = useState(true);
    const [search, setSearch] = useState("");
    const getNoticias  = useLogiState((state)=>state.getPosts)
    const gettingmusic = useLogiState((state)=>state.getMusic)
    const getpost = useLogiState((state)=>state.getPosts)
    const statusget = useLogiState((state)=>state.getStatus)
    const stats = useLogiState((state)=>state.status)
    const posts = useLogiState((state)=>state.posts)
    const Noticias = useLogiState((state)=>state.noticias)
    const musicas = useLogiState((state)=>state.musicas);
    const navigate = useNavigate();
    const [recomendation, setRecomendation] = useState(null);
    const [loading, setLoading] = useState(false)
      useEffect(()=>{
          async function gettings(){
            await getNoticias("noticias")
            await gettingmusic()
            await getpost("postes")
            await statusget()
          }
          gettings()
      }, [])
      function handleRec(e){
          setSearch(String(e.target.value).toLowerCase().trim())
          setRecomendation(null)
          const filterPosts = 
          posts?.filter((p)=>String(p?.title)
          .toLowerCase().trim() == String(search)
          .toLowerCase().trim() || String(p?.title).toLowerCase().trim().includes(String(search).toLowerCase().trim()))
          
          const filterNoticias = 
          Noticias?.filter((n)=>String(n?.title).
          toLowerCase().trim()  == String(search).
          toLowerCase().trim() || String(n?.title).toLowerCase().trim().includes(String(search).toLowerCase().trim()))

          const filterMusicas = 
          musicas?.filter((m)=>String(m?.artistSongTitle).toLowerCase().trim() == String(search)
          .toLowerCase().trim() || String(m?.artistname).toLowerCase().trim() == String(search).toLowerCase().trim()
          || String(m?.title).toLowerCase().trim().includes(String(search).toLowerCase().trim()))
          
          const filterStatus = 
          stats?.filter((s)=>String(s?.artistName).toLowerCase().trim() == String(search)
          .toLowerCase().trim() || String(s?.artistName).toLowerCase().trim().includes(String(search).toLowerCase().trim()))
          
          if(filterMusicas?.length <= 0 && filterPosts?.length <= 0 && 
            filterNoticias?.length <= 0 && filterStatus?.length <= 0 ){
              setRecomendation(null);
              return;
            }

           filterMusicas?.length > 0 && setRecomendation(filterMusicas)
           filterPosts?.length > 0 && setRecomendation(filterPosts)
           filterNoticias?.length > 0 && setRecomendation(filterNoticias)
           filterStatus?.length > 0 && setRecomendation(filterStatus)

      }
    useGSAP(()=>{
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo('.nav', {
        background:position == "nothing" ? "transparent" : (position == "fixed" ? "transparent" : "black"),
        duration:1,
      },{scrollTrigger:{
          trigger:".nav",
          start:"30px 20px",
          end:"0px",
          toggleActions:"play none none reverse"
        },
        background:position == "nothing" ? "transparent" : ( position == "fixed" ? "#1414149b" : "#1414149b"), duration:1 , yoyo:true}
    )
    }, [])

    function handleSubmit(){
        navigate(`/Search/${search}`)
    }
  return (
    <HStack className='nav' left={0} zIndex={100} justifyContent={"center"} background={background} position={ position == "noticias" ? "fixed" : position } width={"100%"}>
      <HStack className='mediaSmallScreenHero'  maxW={"70%"}  zIndex={74} alignItems={"center"} position={"relative"}  padding={7} borderRadius={0}  width={"100%"} left={0}  justifyContent={"space-between"}>
        <HStack onClick={()=>navigate("/")}>
            <Icon.MusicNote color='white' size={30}/>
            <Heading marginLeft={-2} color={"white"}>
                 SM
            </Heading>  
        </HStack>
        <HStack  position={"relative"}  alignItems={"center"} padding={1} background={searchbarColor || "#ffffff9a"} borderRadius={20} width={300}>
           <Input onChange={handleRec} onKeyDown={(e)=>{e.key == 'Enter' && handleSubmit()}} onBlur={()=>{setShowrecommendation(false)}} onFocus={()=>{setShowrecommendation(false)}} color={color || 'black'} zIndex={200} placeholder='Pesquise' border={"none"} outline={"none"}/> 
           <Icon.Search onClick={handleSubmit}  color={serchiconColor || "black"} style={{marginRight:10, zIndex:200}}/>
            <VStack  onFocus={()=>setShowrecommendation(false)} alignItems={"flex-start"} hidden={showrecommendation} p={2}  zIndex={-1} style={{top:50}} borderRadius={10} 
            backgroundColor={"white"} width={"100%"} maxHeight={100} overflowY={"auto"} height={"fit-content"} position={"absolute"}>
                
                {recomendation?.map((item,index)=>{
                  return(
                  <Box 
                  onClick={()=>{navigate(`/Search/${encodeURIComponent(String( item?.title || item?.artistname 
                    || item?.artistName || item?.artistSongTitle).trim())}`)}}
                   borderRadius={10} key={index} width={"100%"} padding={2} _hover={{background:"#f6f6f6"}}>
                    <Text width={"100%"} height={"100%"}  fontSize={12} color={"gray"}>
                      {item?.title || item?.artistname || item?.artistName || item?.artistSongTitle}</Text>
                  </Box>
                  )
                })}
                {!recomendation && <Text color={"gray"} fontSize={10}>Nada aqui</Text>}
                
            </VStack>
        </HStack>
        

        <DrawerCustom>
            <Icon.List color='white' size={50}/>
        </DrawerCustom>
    </HStack>
    </HStack>
    
  )
}
