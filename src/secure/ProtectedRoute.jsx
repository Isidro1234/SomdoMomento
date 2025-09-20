import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Outlet, redirect, useNavigate } from 'react-router'
import { useAuthcontext } from '../Context/AuthContextProvider'
import { useLogiState } from '../states/useLogic'
import { useAuthState } from '../states/useAuthState'

export default function ProtectedRoute() {
  const {isAuthenticated, setAuthenticated, setUserData} = useAuthcontext()
  const login = useAuthState((state)=>state.Login)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  async function loginuser() {
    const result = await login(email,password);
    if(result.res){
      setAuthenticated(true);
      setUserData(result.user)
    }
    if(isAuthenticated){
      navigate("/Dashboard")
    }else{
      redirect("/admin")
    }
  }
  return (
    <>
    {!isAuthenticated ?
        <VStack padding={5} backgroundColor={"blue"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"}>
          <Box zIndex={5} backgroundColor={"white"} borderRadius={10} borderWidth={1} padding={10} display={"flex"} flexDirection={"column"} gap={3}>
            <Heading>Bem vindo ao Somdomomento portal administrador</Heading>
            <Text>porfavor faca o login aqui</Text>
            <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            <Button onClick={loginuser} width={"100%"}>Login</Button>
          </Box>
           <video  playsInline loop muted autoPlay  style={{position:"absolute",zIndex:0, width:"100%", height:"100%", objectFit:"cover"}} src='https://www.pexels.com/download/video/18069232/'/>
        </VStack>
        :
        <Outlet/>
    }
    </>
  )
}
