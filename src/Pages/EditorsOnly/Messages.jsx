import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react/box'
import { Text } from '@chakra-ui/react/text'
import { HStack, VStack } from '@chakra-ui/react/stack'
import { useLogiState } from '../../states/useLogic';
import { useAuthcontext } from '../../Context/AuthContextProvider';
import MessageBoxConteiner from '../../components/custom/MessageBoxConteiner';
import HeaderChat from '../../components/custom/HeaderChat';
import MessagesCont from '../../components/custom/MessagesCont';
import MessageInputChat from '../../components/custom/MessageInputChat';

function Messages() {
    const [message, setMessage] = useState("");
    const {userdata} = useAuthcontext()
    const getChats = useLogiState((state)=>state.getChats)
    const [selectedChat, setSelectChat] = useState(null)
    const chats = useLogiState((state)=>state.chats)
    const getMessages = useLogiState((state)=>state.getChatMessages)
    const Messages =  useLogiState((state)=>state.ChatMessages)
    console.log(userdata)
    const submitMessage = useLogiState((state)=>state.setMessage)
    useEffect(()=>{
        async function gettingChats(){
          await getChats()
        }
        gettingChats()
    }, [])
    async function handleMessage(){
        await submitMessage(message, userdata?.username, selectedChat?.id, userdata?.id)
        setMessage("")
    }
    async function handleSelected(e){
        setSelectChat(e);
        const chatId = e?.id
        await getMessages(chatId)
    }
    console.log(chats)
    console.log(selectedChat , Messages)
  return (
    <HStack justifyContent={"flex-start"} background={"#ffffffff"} padding={2} width={"100%"} flex={1} borderRadius={0}>
      <VStack>
        {chats.map((item,index)=>{
        return(<MessageBoxConteiner selectBox={(e)=>handleSelected(e)} rest={item} key={index} lastmessage={item?.lastMessage} time={item?.date} username={item?.senderName}/>)
      })}
      </VStack>
      

      {selectedChat ?  
      <Box display={"flex"} flexDirection={"column"} flex={1} height={"100%"}>
        <HeaderChat username={selectedChat?.senderName}/>
        <MessagesCont messages={Messages}/>
        <MessageInputChat handleMessage={handleMessage} value={message} onchange={(e)=>setMessage(e)}/>
      </Box>
      :
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} flex={1} height={"100%"}>
          <Text color={"gray"}>Nothing here yet</Text>
      </Box>
      }
    </HStack>
  )
}
export default React.memo(Messages)