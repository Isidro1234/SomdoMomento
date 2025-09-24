import { Badge, Box, Button, Card, HStack, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'
import * as Icon from "react-bootstrap-icons"
export default function PostCard({to, editmode}) {
  const navigate = useNavigate()
  function goto(){
    navigate({pathname:"/Article", data:"hello"})
  }
  return (
    <Card.Root onClick={goto}
      width="100%"
      maxW={{ base: "100%", sm: "400px" }}
      overflow="hidden"
    >
      {/* Stack switches between column (mobile) and row (desktop) */}
      <Stack direction={{ base: "column", md: "row" }} height="100%">
        <Image alt='postcard'
          width={{ base: "100%", md: 150 }}
          height={{ base: 200, md: "100%" }}
          objectFit="cover"
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
        />
        <Box flex="1" p={5}>
          <HStack>
            <Card.Title mb="2" flex={1}>The perfect latte</Card.Title>
          </HStack>
          
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
