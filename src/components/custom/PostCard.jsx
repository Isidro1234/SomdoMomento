import { Badge, Box, Card, Image, Stack } from '@chakra-ui/react'
import React from 'react'

export default function PostCard() {
  return (
    <Card.Root
      width="100%"
      maxW={{ base: "100%", sm: "400px" }}
      overflow="hidden"
    >
      {/* Stack switches between column (mobile) and row (desktop) */}
      <Stack direction={{ base: "column", md: "row" }} height="100%">
        <Image
          width={{ base: "100%", md: 150 }}
          height={{ base: 200, md: "100%" }}
          objectFit="cover"
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
        />
        <Box flex="1" p={5}>
          <Card.Title mb="2">The perfect latte</Card.Title>
          <Card.Description>
            Caffè latte is a coffee beverage of Italian origin made with espresso
            and steamed milk.
          </Card.Description>
          <Stack direction="row" mt={4}>
            <Badge>Hot</Badge>
            <Badge>Caffeine</Badge>
          </Stack>
        </Box>
      </Stack>
    </Card.Root>
  )
}
