import { Box, Button, Heading, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Message from './Message'
import * as Icon from 'react-bootstrap-icons';
import { v4 as uuidv4 } from 'uuid';
import {toaster, Toaster} from "../ui/toaster"
import { useLogiState } from '../../states/useLogic';
import MessagesCont from './MessagesCont';
export default function MessageCard({hide}) {
  const [showchat , setshowChat] = useState(false)
  const [message ,setMessage] = useState("")
  const [username , setUsername] = useState("");
  const [description, setDescription] = useState("");
  const createchat = useLogiState((state)=>state.setChat);
  const sendMessage = useLogiState((state)=>state.setMessage)
  const getChatMessage = useLogiState((state)=>state.getChatMessages)
  const getsingleCht = useLogiState((state)=>state.getSingleChat);
  const Messages =  useLogiState((state)=>state.ChatMessages)
  const chatt = useLogiState((state)=>state.chat) 
  useEffect(()=>{
    async function check(){
        const gettinguser = JSON.parse(localStorage.getItem("userinfo"));
        const gettingChat = JSON.parse(localStorage.getItem("userChat"))
        if(gettinguser?.userdata?.id){
          try {
            await getsingleCht(gettinguser?.userdata?.id);
             const result = await getChatMessage(gettingChat?.data?.id)
              setshowChat(true)
             if(!result) return; 
          } catch (error) {
           setshowChat(false) 
           console.log(error.message)
          }
          
        }
    }
    check()
  }, [])
  console.log("getting", chatt)
  async function handleshowchat(){
    if(username &&  description){
      const userdata = {
        username,
        id : uuidv4(),
      }
      const getuser = JSON.parse(localStorage.getItem("userinfo"));
      if(getuser?.userdata?.id) return;
      localStorage.setItem("userinfo" , JSON.stringify({userdata}))
      await createchat(userdata?.id , userdata?.username)
      setshowChat(true)
      return;
    }
    !username &&
    toaster.create({
      title:"Porfavor adicione seu nome",
      description:"porfavor coloque seu nome no formulario",
      type:"warning",
      duration:5000,
      
    })
    !description && 
     toaster.create({
      title:"porfavor adicione o motivo de nos contactar",
      description:`Porfavor descreva a razao pela qual o senhor quer nos contactar. Isso nos ajuda 
      a prestar um servico mais eficiente`,
      type:"warning",
      duration:5000,
    })
  }

  async function handleMessage(){
     const gettinguser = JSON.parse(localStorage.getItem("userinfo"));
     console.log(chatt)
     if(!chatt?.id)return;
     await sendMessage(message , gettinguser?.userdata?.username, chatt?.id , gettinguser?.userdata?.id)
     setMessage("")
  }
  return (
    <VStack gap={0} className={hide ? "hide" : "show"}  width={"min(400px, 90%)"}  position={"fixed"} zIndex={100}  right={5}  bottom={40} height={470} backgroundColor={"#4a82fcff"} borderRadius={10}>
        <Box borderRadius={10} borderBottomRightRadius={0} borderBottomLeftRadius={0}  p={4} width={"100%"} bg={"blue"}>
            <Heading textAlign={"center"} color={"white"}>Mensagem</Heading>
        </Box>
        <Box overflowY={"auto"} padding={5} paddingRight={0} paddingBottom={0} width={"100%"} flex={1} bg={"#f6f6f6"}>
           <VStack display={showchat ? "none" : "flex"} justifyContent={"space-between"} height={"100%"} borderRadius={10} padding={4} background={"#ffffffec"} alignItems={'flex-start'} gap={2}>
            <VStack flex={1} gap={2} alignItems={"flex-start"} width={"100%"}>
              <Heading color={"gray"} fontWeight={400} fontSize={12}>Contacte-nos pelas nossas redes sociais</Heading>
              <HStack marginTop={-2}>
                <Button borderRadius={50} _hover={{background:"#79f8a5ff"}} color={"white"} bg={"#10e159ff"}><Icon.Whatsapp/></Button>
                <Button borderRadius={50} _hover={{background:"#2080efff"}} color={"white"} bg={"#0d7dfdff"}><Icon.Facebook/></Button>
              </HStack>
              <Text color={"gray"} fontSize={10}>ou continue com o chat</Text>
            <Text fontSize={12} >Nome *</Text>
            <Input onChange={(e)=>{setUsername(e.target.value)}}  placeholder='Digite seu nome'/>
            <Text fontSize={12}>Descreva porque esta a contactar-nos? *</Text>
            <Textarea onChange={(e)=>setDescription(e.target.value)} flex={1} placeholder='Descreva o motivo pelo qual o senhor esta a nos contactar'></Textarea>
            </VStack>
           <Button onClick={handleshowchat} bg={"blue"} borderRadius={50}>Continuar para o chat</Button>
          </VStack>
          <MessagesCont messages={Messages}/>
        </Box>
        <Box display={showchat ? "flex" : "none"} gap={2} alignItems={"center"} borderRadius={10} borderTopRightRadius={0} borderTopLeftRadius={0} p={5} bg={"white"} width={"100%"}>
            <Input value={message} onChange={(e)=>{setMessage(e.target.value)}} flex={1} borderRadius={40} placeholder='Message'/>
            <Button onClick={handleMessage} bg={"blue"} borderRadius={50}>Enviar</Button>
        </Box>
        <Toaster/>
    </VStack>
  )
}
