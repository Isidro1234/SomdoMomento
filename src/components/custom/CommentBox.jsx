import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import AvatarCustom from './AvatarCustom'
import { HSquare } from 'react-bootstrap-icons'
import * as Icon from "react-bootstrap-icons"
import { format } from '../../logic/formatDate'
import CommentReplyBox from './CommentReplyBox'
export default function CommentBox({comment,prevId,dreply, date,author, onclick, Reply, replymode, id}) {
  const [responder, setResponder] = useState(false)
  const [nreply, setNreply] = useState(null)
  async function handlereplies(){
    replymode()
    responder ? setResponder(false) : setResponder(true)
  }
  console.log(nreply)
  return (
    <VStack width={"100%"}>
    <Box width={"100%"}  display={"flex"} alignItems={"center"} gap={2} padding={2} borderRadius={10}  borderWidth={0} >
                    <AvatarCustom name={author || "Anonimo"}/>
                    <VStack flex={1} gap={1} alignItems={"flex-start"} justifyContent={"center"}>
                        <HStack alignItems={"center"} gap={0}>
                          <Text fontWeight={500} lineHeight={1} fontSize={12} color={"black"}>{author || "Anonimo"}</Text> 
                            <Text><Icon.Dot color='gray'/></Text>
                          <Text color={"gray"} lineHeight={1} fontSize={10}>{format(date)}</Text>
                        </HStack>
                      <Text lineHeight={1} fontSize={12} color={"gray"}>{comment}</Text>
                      {!dreply &&   
                      <HStack alignItems={"center"}>
                        <Text onClick={handlereplies}  _hover={{textDecoration:"underline"}} fontSize={7} lineHeight={1} color={"gray"}>
                         {nreply?.id == id && nreply?.numberOfReplies} ver respostas
                        </Text>
                        <Text onClick={()=>onclick()}  _hover={{textDecoration:"underline"}} fontSize={7} lineHeight={1} color={"gray"}>responder</Text>
                      </HStack>  }                
                    </VStack>
        </Box>
       {responder &&
                    <VStack width={"100%"} alignItems={"flex-start"} paddingLeft={5}>
                        {Reply?.map((item,index)=>{
                          return(
                            item?.id == id &&
                          <CommentReplyBox id={item?.id} onreply={(e)=>{setNreply(e)}} numberOfReplies={Reply?.length} date={item?.date.seconds || 1000} comment={item?.comment} key={index}/>)
                        })}
                      </VStack>
                    }
    </VStack>
    
  )
}
