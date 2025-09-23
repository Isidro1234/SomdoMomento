import { Box, Button, Heading, Input, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Outlet, redirect, useNavigate } from 'react-router'
import { useAuthcontext } from '../Context/AuthContextProvider'
import { useLogiState } from '../states/useLogic'
import { useAuthState } from '../states/useAuthState'

export default function ProtectedRoute() {
  const {isAuthenticated, setAuthenticated, setUserData} = useAuthcontext()
  const login = useAuthState((state)=>state.Login)
  const register = useAuthState((state)=>state.Register)
  const [showing, setShowing] = useState("login")
  const recebercodigo = useAuthState((state)=>state.getCodigo);
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [load, setLoad] = useState(false)
  const [password, setPassword] = useState("")
  const [codigo, setcodigo] = useState(0)
  const navigate = useNavigate()
  async function loginuser() {
    setLoad(true)
    let result =""
    if(showing == "login"){
      if( !password || !email) return;
      result = await login(email,password);
    }else{
      if(!username || !password || !email || !codigo) return;
      result = await register(username,email,password, codigo);
    }
    
    if(result.res){
      setAuthenticated(true);
      setUserData(result.user)
    }
    if(isAuthenticated){
      navigate("/Dashboard")
      setLoad(false)
    }else{
      redirect("/admin")
      setLoad(false)
    }
     setLoad(false)
  }
  async function getCodigo(){
    const result = await recebercodigo();
  }
  return (
    <>
    {!isAuthenticated ?
        showing == "login" ?
        <VStack padding={5} backgroundColor={"blue"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"}>
          <Box zIndex={5} backgroundColor={"white"} borderRadius={10} borderWidth={1} padding={10} display={"flex"} flexDirection={"column"} gap={3}>
            <Heading>Bem vindo ao Somdomomento portal administrador</Heading>
            <Text>porfavor faca o login aqui</Text>
            <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            <Button onClick={loginuser} width={"100%"}>{!load ? "login" : <Spinner size={"sm"} bg={"transparent"} color={"white"}/>}</Button>
            <Button onClick={()=>{setShowing("sign")}} bg={"transparent"} color={"blue"}>ainda nao tens conta clique aqui</Button>
          </Box>
           <video  playsInline loop muted autoPlay  style={{position:"absolute",zIndex:0, width:"100%", height:"100%", objectFit:"cover"}} src='https://www.pexels.com/download/video/18069232/'/>
        </VStack>
        :
         <VStack padding={5} backgroundColor={"blue"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"}>
          <Box zIndex={5} backgroundColor={"white"} borderRadius={10} borderWidth={1} padding={10} display={"flex"} flexDirection={"column"} gap={3}>
            <Heading>Bem vindo ao Somdomomento portal administrador</Heading>
            <Text>porfavor faca o login aqui</Text>
            <Input placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            <Input value={codigo} onChange={(e)=>{setcodigo(e.target.value)}} type="number" placeholder='Digite Confirmation Code'/>
            <Button onClick={getCodigo} alignSelf={"flex-start"} bg={"transparent"} color={"gray"} borderColor={"gray"} borderWidth={1} borderRadius={4}>Receber Codigo</Button>
            <Button onClick={loginuser} width={"100%"}>{!load ? "Register" : <Spinner size={"sm"} bg={"transparent"} color={"white"}/>}</Button>
            <Button onClick={()=>{setShowing("login")}} bg={"transparent"} color={"blue"}>Ja tens conta clique aqui</Button>
          </Box>
           <video  playsInline loop muted autoPlay  style={{position:"absolute",zIndex:0, width:"100%", height:"100%", objectFit:"cover"}} src='https://www.pexels.com/download/video/18069232/'/>
        </VStack>
        :
        <Outlet/>
    }
    </>
  )
}
