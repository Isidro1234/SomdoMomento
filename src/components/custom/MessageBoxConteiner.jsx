import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AvatarCustom from './AvatarCustom'

export default function MessageBoxConteiner({username, time , lastmessage, rest, selectBox}) {
    const dateconvert = time?.seconds * 1000 ;
    const data = dateconvert ?  new Date(dateconvert)  : new Date();
    const format = Intl.DateTimeFormat("pt",{
        hour:'2-digit',
        minute:"2-digit",
        hourCycle:"h24",
    }) 
  return (
   <Box onClick={()=>{selectBox(rest)}} padding={2} height={"100%"} borderRightWidth={1} flex={.3}>
            <HStack  _hover={{background:"#f6f6f6"}} width={"100%"} padding={5} gap={2} borderRadius={10}>
               <AvatarCustom name={username}/>
               <VStack width={"100%"} gap={1} alignItems={"flex-start"}>
                   <HStack width={"100%"}>
                     <Text flex={1} lineHeight={1} fontSize={13}>{username}</Text>
                     <Text color={"gray"} lineHeight={1} fontSize={10}>{format.format(data)}</Text>  
                   </HStack>
                   
                   <Text color={"gray"} lineHeight={1} fontSize={12}>{lastmessage}</Text>
               </VStack>
           </HStack>   
         </Box>
  )
}
