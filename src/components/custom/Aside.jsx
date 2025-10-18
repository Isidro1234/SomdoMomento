import { Box, Heading, VStack, HStack, Image, Text } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router";

export default function Aside({ posts }) {
  const navigate = useNavigate()
  function handledate(date){
    const dats = date.seconds * 1000;
    const newdate = new Date(dats);
    const formater = Intl.DateTimeFormat("pt-Br",{
      dateStyle:"medium"
    })
    return(formater.format(newdate))
  }
  return (
    <Box 
      as="aside"
      borderWidth={1}
      width={{ base: "100%", md: "340px" }}

      bg="white"
      borderRadius="lg"
      p={5}
      alignSelf={"flex-start"}
      zIndex={5}
    >
      <Heading size="md" mb={4} color="gray.800">
        Postes Recentes
      </Heading>

      <VStack spacing={4} align="stretch">
        {posts?.map((post, index) => (
          <HStack
            onClick={()=>navigate(`/Article/Post/${encodeURIComponent(String(post?.title)?.trim())}`)}
            key={index}
            spacing={3}
            align="flex-start"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
            p={2}
            borderRadius="md"
          >
            <Image
              src={post?.imagecover}
              alt={post?.title}
              boxSize="60px"
              objectFit="cover"
              borderRadius="md"
              flexShrink={0}
            />
            <Box>
              <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                {post?.title}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {handledate(post?.date)}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}
