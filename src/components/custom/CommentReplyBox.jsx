import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AvatarCustom from './AvatarCustom'
import * as Icon from 'react-bootstrap-icons';
import { format } from '../../logic/formatDate';

export default function CommentReplyBox({comment,prevId, date,author, onclick, Reply, replymode, id ,onreply, numberOfReplies}) {
     const data = date.seconds
    useEffect(()=>{
        onreply({id, numberOfReplies})
    }, [numberOfReplies])
    return (
     <Box  display={"flex"} alignItems={"center"} gap={2} padding={2} borderRadius={10}  borderWidth={0} >
                    <AvatarCustom name={author || "Anonimo"}/>
                    <VStack flex={1} gap={1} alignItems={"flex-start"} justifyContent={"center"}>
                        <HStack alignItems={"center"} gap={0}>
                           <Text fontWeight={500} lineHeight={1} fontSize={12} color={"black"}>{author || "Anonimo"}</Text> 
                            <Text><Icon.Dot color='gray'/></Text>
                           <Text color={"gray"} lineHeight={1} fontSize={10}>{format(date)}</Text>
                        </HStack>
                      <Text lineHeight={1} fontSize={12} color={"gray"}>{comment}</Text>               
                    </VStack>
                
        </Box>
  )
}
