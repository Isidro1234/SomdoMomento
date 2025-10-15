import {VStack} from '@chakra-ui/react/stack'
import {Heading} from '@chakra-ui/react/heading'
import {Input} from '@chakra-ui/react/input'
import React, { useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { useLogiState } from '../../states/useLogic'

export default function Paginas() {
  const settingabout = useLogiState((state)=>state.setAboutPage);
  const [text, setText] = useState("");
  async function handlePost (){
    await settingabout(text);
    setText("")
  }
  return (
    <VStack width={"100%"} padding={5} alignItems={"flex-start"}>
        <Heading>Paginas</Heading>
        <Heading color={"gray"} fontSize={14}>Pagina Sobre nos</Heading>
        <Textarea value={text} onChange={(e)=>setText(e.target.value)} outline={"none"} minHeight={200} maxHeight={400} placeholder='Porfavor adicione o conteudo para a pagina'></Textarea>
        <Button onClick={handlePost} width={"100%"}>Postar</Button>
    </VStack>
  )
}
