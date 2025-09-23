import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import { useLogiState } from '../../states/useLogic';
import { Toaster, toaster } from '../ui/toaster';
export default function Newslatter() {
  const newsLettersubscription = useLogiState((state)=>state.subscribeToNewsLetter);
  const [email, setEmail] = useState("")
  async function subscribe(){
    const result = await newsLettersubscription(email)
    if(result){
        toaster.create({
          title:"Inscrito com Sucesso",
          description:"Parabens voce acabou de subscrever-se na nossa newsletter",
          type:"success",
          duration:2000
        })
        return;
    }
     toaster.create({
          title:"Algo correu errado",
          description:"porfavor tente mais tarde deve ter sido um problem de coneccao",
          type:"error",
          duration:2000
        })
  }
  return (
    <VStack width={"100%"} backgroundColor={"#4646f8e1"} justifyContent={"center"} alignItems={"center"} height={"70vh"} padding={10}>
        <Box gap={5} display={"flex"} flexDirection={"column"} justifyItems={"center"} alignItems={"center"} maxWidth={500}>
           <Heading color={"white"} fontSize={27}>Newsletter</Heading>
        <Text color={"white"} textAlign={"center"}>Subscreva-se Ja na nossa newslatter e receba noticias de ultima hoja Sobre
            as tuas celebridades favoritas
        </Text>
        <HStack padding={2} borderRadius={10} alignItems={"center"} backgroundColor={"white"}>
            <Input value={email} onChange={(e)=>{setEmail(e.target.value)}}  borderRadius={10} padding={6} placeholder='Digite seu email'/> 
            <Button onClick={subscribe} background={"#4646f8e1"} height={"100%"}  borderRadius={10}><Icon.Send/></Button>
        </HStack>
        
        </Box>
        <Toaster/>
    </VStack>
  )
}
