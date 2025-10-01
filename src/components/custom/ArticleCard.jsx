import { Box, Heading, Text, HStack, VStack, Avatar, Button, Input } from "@chakra-ui/react"
import React, { useRef } from "react"
import DOMPurify from "dompurify"
import * as Icon from "react-bootstrap-icons"
import AvatarCustom from "./AvatarCustom";
import { useLogiState } from "../../states/useLogic";
import {Toaster, toaster} from "../ui/toaster"

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
  const deleteposts = useLogiState((state)=>state.delePost)
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
      <HStack marginTop={5}>
        <Input  borderRadius={30} placeholder="Comenta aqui"/>
        <Button background={"transparent"} borderRadius={50}><Icon.Send color="black"/></Button>
      </HStack>
    </Box>
  );
}
