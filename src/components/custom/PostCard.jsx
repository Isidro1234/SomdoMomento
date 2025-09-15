import { Badge, Box, Card, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'

export default function PostCard() {
  return (
    <Card.Root  overflow={'hidden'} flexDirection={"row"} >
        <Image width={150} height={"fill"} src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'/>
        <Box padding={4}>
         <Card.Title mb="2">The perfect latte</Card.Title>
        <Card.Description>
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
        </Box>
        
    </Card.Root>
  )
}
