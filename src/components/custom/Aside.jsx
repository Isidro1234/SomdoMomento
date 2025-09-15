import { Box, Heading, VStack, HStack, Image, Text } from "@chakra-ui/react"
import React from "react"

export default function Aside({ posts }) {
  return (
    <Box
      as="aside"
      width={{ base: "100%", md: "300px" }}
      bg="white"
      borderRadius="lg"
      p={5}
      alignSelf={"flex-start"}
      zIndex={5}
    >
      <Heading size="md" mb={4} color="gray.800">
        Recent Posts
      </Heading>

      <VStack spacing={4} align="stretch">
        {posts.map((post, index) => (
          <HStack
            key={index}
            spacing={3}
            align="flex-start"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
            p={2}
            borderRadius="md"
          >
            <Image
              src={post.image}
              alt={post.title}
              boxSize="60px"
              objectFit="cover"
              borderRadius="md"
              flexShrink={0}
            />
            <Box>
              <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                {post.title}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {post.date}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}
