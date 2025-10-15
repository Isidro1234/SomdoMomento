import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import AvatarCustom from '../../components/custom/AvatarCustom'
import { useAuthcontext } from '../../Context/AuthContextProvider'
import * as Icon from 'react-bootstrap-icons';
import { useLogiState } from '../../states/useLogic';

export default function Definicoes() {
  const {userdata} = useAuthcontext();
  const inputref = useRef(null)
  const [preverpic, setpreverpic] = useState(null);
  const updatePic = useLogiState((state)=>state.updateUserPic)
  async function handlepicchange(){
    inputref.current.click()
  }
  async function handlepic(file) {
    const reader = new FileReader();
    reader.onload = (e)=>{
        setpreverpic(e.target.result) 
    }
    reader.readAsDataURL(file)
    await updatePic(file)
  }
  return (
    <VStack width={"100%"} padding={5} alignItems={"flex-start"}>
      <Heading>Definições</Heading>
      <VStack width={"100%"}>
       <Box  position={"relative"}>
        <AvatarCustom size={"2xl"} image={preverpic || userdata?.image} name={userdata?.username}/> 
        <Input accept={"image/*"} onChange={(e)=>handlepic(e.target.files[0])} ref={inputref} type='file' display={"none"}/>
        <Button onClick={handlepicchange} size={"xs"} bg={"blue"} position={"absolute"} p={1} top={8} right={-2} borderRadius={50}>
        <Icon.Camera />
       </Button>
      </Box>
      <Text textAlign={"center"} fontSize={14} color={"gray"}>@{userdata?.username}</Text> 
      </VStack>
      <Text>Nome do Usuario</Text>
      <Input  placeholder={userdata?.username}/>
      <Text>Email</Text>
      <Input  placeholder={userdata?.email}/>
      <Button bg={"red"} borderRadius={50}>Log out</Button>
    </VStack>
  )
}
