import React, { useEffect, useRef, useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Button, Dialog, Heading, HStack, Image, Input, Portal, Text, VStack } from "@chakra-ui/react"
import AvatarCustom from './AvatarCustom'
import { useLogiState } from '../../states/useLogic';
import CommentBox from './CommentBox';
import { randomname } from '../../logic/RandomName';
export default function StatusComp({id, icon, media , editmode, image,type, description, artistname , link }) {
  const [comment , setComment] = useState("");
  const setStatusComment = useLogiState((state)=>state.setStatusComments)
  const getStatusComment = useLogiState((state)=>state.getStatusComments);
  const comments = useLogiState((state)=>state.statusComment)
  const setstatysreplycomment = useLogiState((state)=>state.setCommentReply)
  const commentreplies = useLogiState((state)=>state.statusCommentreply)
  const getStatusReply = useLogiState((state)=>state.getReplies)
  const closeref = useRef(null)
  const [selectcomment, setSelectcomment] = useState(null)
  const [showcommentsreply , setShowcommentReply] = useState(false)
  useEffect(()=>{
    async function getting(){
        await getStatusComment(id)
    }
    getting()
  }, [])
  async function handleComment(){
    const check = localStorage.getItem("perfilComent");
    const val = JSON.parse(check);
    let perfil = ""
    if(!val?.perfil?.nome){
      perfil = {
          fotoPerfil : "",
          nome:randomname()
        }
      const criarPerfilComentador = localStorage.setItem("perfilComent", JSON.stringify({perfil}))
    }
     
    const author = val?.perfil?.nome || perfil?.nome;
    if(!comment || !author ) return;
    if(selectcomment?.[0]?.id ){
      await setstatysreplycomment(id , selectcomment?.[0]?.id , comment , author)
      setComment("")
      return;
    }
    await setStatusComment(id, comment, author)
    setComment("")
  }
  async function handlever(nexId, author, comment) {
    setSelectcomment([{id:nexId, author:author, comment:comment}]);
  }
  async function showReplies(nexId, author, comment) {
    await getStatusReply(id, nexId)
  }
  console.log(commentreplies)
  return (
<Dialog.Root   placement={"center"} size={"xl"} >
      <Dialog.Trigger asChild>
          <Button bg={"#f6f6f6"} padding={2} width={"fit-content"} height={"fit-content"} borderRadius={50}>{icon}</Button>
      </Dialog.Trigger>
      <Dialog.CloseTrigger  display={"none"} ref={closeref}>
      </Dialog.CloseTrigger>
      <Portal >
        <Dialog.Backdrop />
        <Dialog.Positioner className='Scrolling'  borderWidth={0} padding={2}>
          <Dialog.Content  height={"100%"}   borderRadius={10} p={0}>
            <Dialog.Body borderRadius={10} height={"100%"}  p={0}>
               
                <HStack position={"relative"} overflowY={"auto"} maxHeight={"100%"} gap={0} display={"grid"} 
                gridTemplateColumns={"repeat(auto-fit,minmax(min(300px,100%),1fr))"}  height={"100%"} alignItems={"flex-start"}>
                    <VStack height={"100%"} flex={1}>
                        {String(type)?.startsWith("video") &&
                        <video autoPlay controls src={media} style={{width:"100%", objectFit:"cover", height:"100%"}}/>
                        }
                        {!String(type)?.startsWith("video") &&
                        <Image borderRadius={50} src={image} width={10} height={10}/>
                        }
                    </VStack>

                  
                    <Button onClick={()=>{closeref.current.click()}} position={'absolute'} top={4} left={5} bg={"#e35050ff"} borderRadius={50} >X</Button>
                    <VStack  paddingTop={5} paddingLeft={4} alignItems={"flex-start"} 
                    flex={1} height={"100%"} justifyContent={"flex-start"}>
                       
                       <HStack width={"100%"} gap={2} paddingRight={4} alignItems={"flex-start"}>
                       
                        <Image borderRadius={50} src={image} width={10} height={10}/>
                        
                        <VStack flex={1}  gap={0} alignItems={'flex-start'} justifyContent={"flex-start"}>
                          <HStack gap={1} alignItems={"center"}>
                            <Text fontWeight={500}>{artistname || ""}</Text>
                            <Icon.PatchCheckFill color='blue'/>
                          </HStack>
                          <Text color={"gray"} fontSize={12} lineHeight={1}>@{artistname || ""}</Text>
                       </VStack>
                        <Button onClick={()=>{link && (window.location.href = link)}} borderRadius={50} bg={"pink.600"}><Icon.Instagram/></Button>
                       </HStack>
                       <Text>{description}</Text>
                       <VStack width={"100%"}>
                        {selectcomment && 
                        <VStack position={"relative"} gap={0} width={"100%"} alignItems={"flex-start"} marginBottom={-5}>
                        <Button position={"absolute"} right={10} top={-1} bg={"blue"} size={"2xs"} fontSize={9} borderRadius={50} onClick={()=>setSelectcomment(null)}>X</Button>
                        <Text lineHeight={1} fontStyle={"italic"} fontSize={10} color={"gray"}>Respondento a {selectcomment?.[0]?.author}: </Text>
                        <Text lineHeight={1} color={"gray"} fontSize={10}>{selectcomment?.[0]?.comment}</Text>
                        </VStack>
                        }
                        <HStack  paddingTop={5} alignItems={"center"} width={"100%"} paddingRight={4}>
                          <Input value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='Comenta aqui' borderRadius={50}/>
                          <Button onClick={handleComment} borderRadius={50} borderWidth={1}
                          borderColor={"gray"} color={"black"} bg={"transparent"}><Icon.Send/></Button>
                        </HStack>
                       </VStack>
                        <VStack gap={0} alignItems={"flex-start"} width={"100%"}>
                          {comments?.map((item,index)=>{
                            return(
                              item?.prevId == id &&
                              <VStack key={index}>

                              <CommentBox Reply={commentreplies} author={item?.author} 
                              replymode={()=>showReplies(item?.id,item?.author, item?.comment)}
                              onclick={()=>handlever(item?.id,item?.author, item?.comment)}  prevId={id} id={item?.id} date={item?.date || 1000} comment={item?.comment} key={index}/>
                             
                              
                            </VStack>
                            )
                          })}
                        </VStack>
                    </VStack>
      
                </HStack>
              
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>

  )
}
