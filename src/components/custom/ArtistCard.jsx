import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AvatarCustom from './AvatarCustom'

export default function ArtistCard({title, artist}) {
  return (
    <HStack >
        <AvatarCustom/>
        <VStack alignItems={"flex-start"} justifyContent={'flex-start'} gap={0}>
            <Text fontSize={14}>{title}</Text>
            <Text fontSize={10} color={"gray"} lineHeight={.5}>{artist}</Text>
        </VStack>
    </HStack>
  )
}
