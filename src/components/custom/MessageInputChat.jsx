import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

export default function MessageInputChat({value , onchange , handleMessage}) {
  return (
    <Box display={"flex"} gap={2} alignItems={"center"} width={"100%"} padding={4}>
        <Input value={value} onChange={(e)=>onchange(e.target.value)} flex={1} padding={7} borderRadius={20} placeholder='Enviar mensagem'/>
        <Button onClick={handleMessage} borderRadius={50} height={"100%"} bg={"blue"}>Enviar</Button>
    </Box>
  )
}
