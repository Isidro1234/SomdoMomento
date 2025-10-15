import { Box, Button, Heading, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import SelectPromotion from './SelectPromotion';
import { useLogiState } from '../../states/useLogic';
export default function PromotionPost({title}) {
    const inputref1 = useRef(null);
    const inputref2 = useRef(null);
    const [preverImage, setPreverImage] = useState(null)
    const [select, setSelect] = useState("")
    const [link, setLink] = useState("")
    const [buttonText, setButtonText] = useState("Visite-nos")
    const [fileres, setFile] = useState(null)
    const setPromotion = useLogiState((state)=>state.setPromotion)
    const inputref3 = useRef(null)
    const [artistinfo, setArtistInfo] = useState(()=>({
      artistname:"",
      title:"",
    }))
    const [music, setMusic] = useState(null)
    async function handlesubmit(file){
        const reader = new FileReader();
        reader.onload = (e)=>{
            setPreverImage(e.target.result)
        }
        reader.readAsDataURL(file);
        setFile(file)
    }
    async function submit(){
        !buttonText && setButtonText("Visite-nos")
        if(!select || !fileres || !link ) return;
        const check = music || false
        await setPromotion(select ,fileres, link, buttonText,music, artistinfo)
    }

    async function handleMusic(file2){
        const reader = new FileReader();
        reader.readAsDataURL(file2);
        setMusic(file2)
    }
  return (
    <VStack  alignItems={"flex-start"}>
              <Heading fontSize={14} color={"gray"}>{title}</Heading>
              <Box 
              width={"100%"} maxWidth={300} position={"relative"} display={"flex"} 
              justifyContent={"center"} 
              alignItems={"center"}  
              borderWidth={1} height={200} borderRadius={10}>
                <Icon.InfoCircle style={{position:"absolute", right:10, top:10, color:"white"}}/>
                {preverImage ?
                <Image src={preverImage} objectFit={"cover"} borderRadius={10} width={"100%"} height={"100%"}/>
                :
                <Text color={"gray"} fontSize={10}>Prever Promoção</Text>
                }

                {link &&
                <Button onClick={()=>window.location.href = link} 
                borderRadius={50} position={"absolute"} left={2} bottom={2}  
                bg={"blue"}>{!buttonText ? "Visite-nos" : buttonText}</Button>
                }
              </Box>
              <SelectPromotion select={(e)=>{setSelect(e)}}/>
              <HStack alignItems={"center"} flexWrap={"wrap"}>
                {select === "Musicas" &&
                <HStack alignItems={"center"}>
                    <Input type='file' accept='audio/*' display={"none"} onChange={(e)=>handleMusic(e.target.files[0])} ref={inputref3}/>
                    <Box display={"flex"} flexDirection={"column"} 
                    justifyContent={"center"} alignItems={"center"} padding={4} onClick={()=>{inputref3.current.click()}} borderWidth={1} borderRadius={10}>
                      <Icon.Cloud color='gray'/>
                      <Text textAlign={"center"} fontSize={10} color={"gray"} lineHeight={1}>Adicionar Musica</Text>
                    </Box>
                    <Input width={"fit-content"} value={artistinfo.artistname} onChange={(e)=>setArtistInfo((prev)=>({...prev , artistname: e.target.value}))} placeholder='Nome do Artista'/>
                    <Input width={"fit-content"} value={artistinfo.title} onChange={(e)=>setArtistInfo((prev)=>({...prev , title: e.target.value}))} placeholder='titulo da musica'/>
                </HStack>
                
                }
                <Input onChange={(e)=>{setLink(e.target.value)}} placeholder='Adicionar Link'/>
                <Input onChange={(e)=>{setButtonText(e.target.value)}} placeholder='Texto para o link'/>
              </HStack>
              
              <HStack width={"100%"}  justifyContent={"space-between"}>
                <Input type='file' accept='video/*' onChange={(e)=>{handlesubmit(e.target.files[0])}} ref={inputref1} display={"none"}/>
                <Input type='file' accept='image/*' onChange={(e)=>{handlesubmit(e.target.files[0])}} ref={inputref2} display={"none"}/>
                <Box onClick={()=>{inputref1.current.click()}} display={"flex"} gap={1} flex={1} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}  padding={5} borderWidth={1} borderRadius={10}>
                    <Icon.CameraVideo/>
                    <Text fontSize={10} color={"gray"}>adicionar video</Text>
                </Box>
                <Box onClick={()=>inputref2.current.click()} display={"flex"} gap={1} flex={1} flexDirection={"column"} alignItems={"center"} justifyContent={'center'} padding={5} borderWidth={1} borderRadius={10}>
                    <Icon.Image/>
                    <Text fontSize={10} color={"gray"}>adicionar imagem</Text>
                </Box>
               
              </HStack> 
              <Button width={"100%"} onClick={submit}>Postar</Button>
    </VStack>
  )
}
