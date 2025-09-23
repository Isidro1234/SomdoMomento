import React from 'react'
import PostCard from './PostCard'
import { Box, Heading, Stack } from '@chakra-ui/react'

export default function RecentPosts() {
  const data = ["", "", ""]

  return (
    <Box className='destaquesection' width="100%" p={4} paddingBottom={20}>
      <Box width="100%" display="flex" flexDirection="column" gap={5} mt={5}>
        <Heading>Destaques da Banda</Heading>
        {/* Responsive layout: column on mobile, row on larger screens */}
        <Stack
          direction={{ base: "column", md: "row" }}
          width="100%"
          gap={10}
          align="stretch"
        >
          {data.map((item, index) => (
            <PostCard key={index} />
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
