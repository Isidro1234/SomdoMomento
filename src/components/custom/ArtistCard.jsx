import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AvatarCustom from './AvatarCustom'

export default function ArtistCard({image, title, artist}) {
  return (
    <HStack >
        {image && <AvatarCustom name={title} image={image}/>}
        <VStack alignItems={"flex-start"} justifyContent={'flex-start'} gap={0}>
            <Text fontSize={14}>{title}</Text>
            <Text fontSize={10} color={"gray"} lineHeight={.5}>{artist}</Text>
        </VStack>
    </HStack>
  )
}
