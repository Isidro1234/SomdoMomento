import { Box, Heading, Text, HStack, VStack, Avatar, Button } from "@chakra-ui/react"
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
      bg="white"
      borderWidth={1}
      borderRadius="xl"
      p={{ base: 5, md: 6 }}
      flex={1}
      mx="auto"
      alignSelf="flex-start"
    >
      {/* Title */}
      <HStack flexWrap="wrap" justify="space-between" mb={4}>
        <Heading
          as="h1"
          size="xl"
          color="gray.800"
          fontWeight="bold"
          flex={1}
        >
          {title}
        </Heading>
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
        <AvatarCustom size="sm" src={image} name={author} />
        <VStack gap={0} spacing={0} align="flex-start">
          <Text fontWeight="semibold" fontSize="sm" color="gray.700">
            {author}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {format.format(dates)}
          </Text>
        </VStack>
      </HStack>

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
    </Box>
  );
}
