import { Box, Heading, Text, HStack, VStack, Avatar, Button } from "@chakra-ui/react"
import React from "react"

export default function ArticleCard({ title, author, date, body, image }) {
  return (
    <Box
      bg="white"
      borderWidth={1}
      borderRadius="xl"
      p={{ base: 5, md: 6 }}
      flex={1}
      mx="auto"
      alignSelf={"flex-start"}
    >
      {/* Title */}
      <Heading
        as="h1"
        size="xl"
        mb={4}
        color="gray.800"
        fontWeight="bold"
      >
        {title}
      </Heading>

      {/* Author + Date */}
      <HStack spacing={3} mb={6}>
        <Avatar.Root size={"sm"}>
          {image ?
          <Avatar.Image src={image}/>
        :
        <Avatar.Fallback name={author}/>
        }
          
        </Avatar.Root> 
        <VStack gap={0} spacing={0} align="flex-start">
          <Text lineBreak={.5} fontWeight="semibold" fontSize="sm" color="gray.700">
            {author}
          </Text>
          <Text lineBreak={.5} fontSize="xs" color="gray.500">
            {date}
          </Text>
        </VStack>
      </HStack>

      {/* Body */}
      <Text
      
      >
        {body}
      </Text>
      <Button marginTop={4}>Read more</Button>
    </Box>
  )
}
