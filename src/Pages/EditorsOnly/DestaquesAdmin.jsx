import {HStack, VStack } from '@chakra-ui/react/stack'
import React, { useEffect, useRef, useState } from 'react'
import {Heading} from "@chakra-ui/react/heading"
import * as Icon from "react-bootstrap-icons"
import { useLogiState } from '../../states/useLogic'
import { Box, Button, Image, Input, Text, Textarea } from '@chakra-ui/react'
import StatusComp from '../../components/custom/StatusComp'
 function DestaquesAdmin() {
  const getDestaques = useLogiState((state)=>state.getPosts)
  const destaques = useLogiState((state)=>state.destaques)
  const setStats = useLogiState((state)=>state.setStatus);
  const statusget = useLogiState((state)=>state.getStatus)
  const stats = useLogiState((state)=>state.status)
  const [description, setDescription] = useState("");
  const [instaLink, setInsta] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistImage, setArtisImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [media, setMedia] = useState(null)
  const inputref1 = useRef(null);
  const inputref2 = useRef(null);
  const inputref3 = useRef(null);
  useEffect(()=>{
      async function getpst(){
        await getDestaques("destaques")
        await statusget()
      }
      getpst()
    }, [])

    async function handlepic(file){
      const reader = new FileReader();
      reader.onload = (e)=>{
        setPreview(e.target.result)
      }
      reader.readAsDataURL(file);
      setMedia(file)
    }
    async function handleartist(file2){
       const reader = new FileReader();
      reader.onload = (e)=>{
        setPreview(e.target.result)
      }
      reader.readAsDataURL(file2);
      setArtisImage(file2)
    }
    async function submit(){
      if(!media || !description || !artistName || !instaLink || !artistImage) return;
      await setStats(media , description , artistName , instaLink , artistImage)
      setMedia(null);
      inputref1.current.value = null
      inputref2.current.value = null
      inputref3.current.value = null
      setDescription("")
    }
  return (
    <VStack padding={5} background={"white"} alignItems={"flex-start"} justifyContent={"flex-start"} width={"100%"} height={"100%"}>
      <VStack width={"100%"} alignItems={"flex-start"}>
        <Heading>Status</Heading>
        <HStack>
        {stats?.map((item,index)=>{
        return(
          <StatusComp id={item?.id} 
                          key={index} artistname={item?.artistName} 
                          link={item?.instaLink}
                          image={item?.artistImage}
                          media={item?.image} description={item?.description}  
                          icon={<Image width={20} height={20} borderRadius={50} 
                          src={item?.image}/>}/>
        )
      })}
      </HStack>
      <Heading>Configuracoes</Heading>
        <Input type='file' onChange={(e)=>{handlepic(e.target.files[0])}} 
        accept='image/*' ref={inputref1} display={"none"}/>
        <Input type='file' onChange={(e)=>{handlepic(e.target.files[0])}}
        accept='video/*' ref={inputref2} display={"none"}/>
        <HStack width={"100%"}>
            <Box onClick={()=>inputref1.current.click()} display={"flex"} flexDirection={"column"}
             alignItems={'center'} gap={1} justifyContent={'center'} padding={5} borderWidth={1} borderRadius={10}>
              <Icon.Image/>
              <Text fontSize={10} color={"gray"}>Add Picture</Text>
            </Box>
            <Box onClick={()=>inputref2.current.click()} display={"flex"} flexDirection={"column"}
             alignItems={'center'} justifyContent={'center'} gap={1} padding={5} borderWidth={1} borderRadius={10}>
              <Icon.CameraVideo/>
              <Text fontSize={10} color={"gray"}>Add video</Text>
            </Box>
        </HStack>
        
        <Textarea value={description} onChange={(e)=>setDescription(e.target.value)} width={"100%"} maxHeight={300} outline={"none"} minHeight={100} placeholder='Descricao do status'/>
          <Input accept='image/*' onChange={(e)=>handleartist(e.target.files[0])} display={"none"} ref={inputref3} type='file'/>
          <Box onClick={()=>inputref3.current.click()} display={"flex"} flexDirection={"column"}
             alignItems={'center'} justifyContent={'center'} gap={1} padding={5} borderWidth={1} borderRadius={10}>
              <Icon.Image/>
              <Text fontSize={10} color={"gray"}>Imagem do artista</Text>
            </Box>
          <Input value={artistName} onChange={(e)=>setArtistName(e.target.value)} placeholder='nome do Artista'/>
          <Input value={instaLink} onChange={(e)=>setInsta(e.target.value)} placeholder='Link do Insta'/>
      </VStack>
      <Button onClick={submit} width={"100%"}>Postar</Button>    
    </VStack>
  )
}
export default React.memo(DestaquesAdmin)