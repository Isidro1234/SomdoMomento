import { Box, Heading, Text, HStack, VStack, Avatar, Button, Input } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import DOMPurify from "dompurify"
import * as Icon from "react-bootstrap-icons"
import AvatarCustom from "./AvatarCustom";
import { useLogiState } from "../../states/useLogic";
import {Toaster, toaster} from "../ui/toaster"
import Modal from "./Modal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {FacebookMessengerIcon, FacebookShareButton, FacebookShareCount} from "react-share"

export default function ArticleCard({
  id,
  to,
  title,
  author,
  edimode,
  date,
  body,
  image,
  button,
}) {
  const convertSeconds = date?.seconds ? date.seconds * 1000 : 1000;
  const dates = new Date(convertSeconds);
  const [emoji, setemoji] = useState("")
  const deleteposts = useLogiState((state)=>state.delePost)
  const [showcomment, setComment] = useState(false)
  const [activeHeart, setHeart] = useState(false)
  const format = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
  });
  const once = useRef({
    ref:body
  })
  async function deletep(){
    const result = await deleteposts(to,id);
    if(result){
      toaster.create({
        title:"Poste deletado com sucess",
        duration:5000,
        type:"success"
      })
    }
  }
  useGSAP(()=>{
    if(activeHeart){
      gsap.fromTo('.heart',{
        scale: 0,
      }, 
      { scale: 1,
        duration:.7,
        ease:"elastic.inOut"
      }
    )
    }else{
      gsap.to('.heart',{
        scale: 0,
        duration:.7,
        ease:"elastic.inOut"
      }, 
    )
    }
      
  }, [activeHeart])
  useGSAP(()=>{
    if(emoji){
      gsap.fromTo('.emoji',{
        scale: 0,
      }, 
      { scale: 1,
        duration:.7,
        ease:"elastic.inOut"
      }
    )
    }else{
      gsap.to('.emoji',{
        scale: 0,
        duration:.7,
        ease:"elastic.inOut"
      }, 
    )
    }
      
  }, [emoji])
  return (
    <Box className="contpics"
      width={edimode ? "fit-content" : "100%"}
      bg="#ffffffff"
      borderWidth={1}
      borderRadius="xl"
      maxW={700}
      p={{ base: 5, md: 6 }}
      flex={1}
      alignSelf="flex-start"
    >
      {/* Title */}
      <HStack flexWrap="wrap" justify="space-between" mb={4}>
        
        {edimode && (
          <HStack spacing={2} display={{ base: "none", sm: "flex" }}>
            <Button onClick={deletep} variant="ghost" color="red.500">
              <Icon.Trash />
            </Button>
            <Button variant="ghost" color="black">
              <Icon.PencilSquare />
            </Button>
          </HStack>
        )}
      </HStack>

      {/* Author + Date */}
      <HStack spacing={3} mb={6}>
        <AvatarCustom size="xl" src={image} name={author} />
        <VStack gap={0} spacing={0} align="flex-start">
          <Text lineHeight={1} fontWeight="semibold" fontSize="sm" color="gray.700">
            {author}
          </Text>
          <Text fontSize="xs" color="gray.500">
            Autor
          </Text>
        </VStack>
      </HStack>
      <VStack alignItems={"flex-start"} justifyContent={"center"}>
        <Heading
          fontSize={29}
          color="gray.800"
          fontWeight="bold"
          flex={1}
          marginTop={-4}
        >
          {title}
        </Heading>
        <HStack alignItems={"center"}>
          <Text fontSize={10} color={"red"}>Sports</Text>
          <Text fontSize={10} color={"gray"}> | </Text>
          <Text fontSize={10} color={"gray"}>6 minutes</Text>
        </HStack>
      </VStack>
      
      {/* Body */}
      <Box 
        className="quill-body"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(once.current.ref, {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: [
              "allow",
              "allowfullscreen",
              "frameborder",
              "scrolling",
              "src",
            ],
          }),
        }}
      />

      {button && (
        <Button mt={4} colorScheme="blue" size="sm">
          Leia mais
        </Button>
      )}
      <Toaster/>
      <HStack height={"fit-content"} >
       <Text className="emoji" fontSize={10}>{emoji}</Text> 
      </HStack>
      <HStack marginLeft={-3} marginTop={0} alignItems={"center"}>
        <Button bg={"transparent"} onClick={()=>{activeHeart ? setHeart(false) : setHeart(true)}}>{activeHeart ?<Icon.HeartFill className="heart" color="red"/>  : <Icon.Heart  color="black"/>}  </Button>
        <Modal emojiset={(e)=>{setemoji(e)}}/>
        <Button bg={"transparent"}>
          <Icon.Share color="black"/>
        </Button>
      </HStack>
      <HStack marginTop={2}>
        <Input onBlur={()=>setComment(false)} onFocus={()=>setComment(true)} borderRadius={30} placeholder="Comenta aqui"/>
        <Button background={"transparent"} borderRadius={50}><Icon.Send color="black"/></Button>
      </HStack>
      <VStack  marginTop={5} padding={0} paddingTop={0} alignItems={"flex-start"} display={showcomment ? "flex" : "none"}>
        <Box  display={"flex"} alignItems={"center"} gap={2} padding={2} borderRadius={10}  borderWidth={1} >
            <AvatarCustom name={"Anonymous"}/>
            <VStack flex={1} gap={1} alignItems={"flex-start"} justifyContent={"center"}>
              <Text fontWeight={500} lineHeight={1} fontSize={12} color={"black"}>Anonimo</Text>
              <Text lineHeight={1} fontSize={10} color={"gray"}>dsdfsdf</Text>
            </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
