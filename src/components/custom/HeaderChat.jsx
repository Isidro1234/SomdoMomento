import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AvatarCustom from './AvatarCustom'

export default function HeaderChat({username}) {
  return (
    <Box display={"flex"} borderWidth={1} borderRadius={10} gap={2} alignItems={"center"} padding={4}>
                <AvatarCustom name={username}/>
                <VStack width={"100%"} gap={1} alignItems={"flex-start"}>
                    <HStack width={"100%"}>
                      <Text flex={1} lineHeight={1} fontSize={13}>{username}</Text>
                    </HStack>
                    <Text color={"gray"} lineHeight={1} fontSize={12}>online</Text>
                </VStack>
    </Box>
  )
}
