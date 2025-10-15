import { Box } from '@chakra-ui/react'
import React from 'react'
import Message from './Message'

export default function MessagesCont({messages}) {
    const savedata = JSON.parse(localStorage.getItem("userinfo"))
  return (
     <Box padding={5} flex={1} overflowY={"auto"} maxHeight={"100%"} >
        {messages?.map((item,index)=>{
            return(
                <Message id={item?.id == JSON.parse(localStorage.getItem("userinfo")).userdata?.id ? true : false} author={item?.name}  message={item?.message} key={index}/>
            )
        })}
     </Box>
  )
}
