import { Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import Aside from './Aside'
import ArticleCard from './ArticleCard'

export default function ArticleSection() {
     const posts = [
    {
      title: "AI in Music: The Next Frontier",
      date: "Sep 10, 2025",
      image: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg",
    },
    {
      title: "How Streaming Changed Everything",
      date: "Sep 8, 2025",
      image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg",
    },
    {
      title: "5 Tips for Independent Artists",
      date: "Sep 5, 2025",
      image: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",
    },
  ]
  return (
    <VStack padding={4} justifyContent={"flex-start"} alignItems={"flex-start"} background={"#f6f6f6"}  width={"100%"}>
        <Heading>Artigos Recentes</Heading>
        <HStack flexWrap={"wrap"} width={"100%"} alignItems={"center"}>
            <VStack flex={1}>
                 {posts.map((item,index)=>{
                return(
                   <ArticleCard key={index}
        title="The Future of AI in Music"
        author="Izy Skills"
        date="September 14, 2025"
        body={`Artificial intelligence is transforming the way we create, 
        distribute, and enjoy music. From personalized recommendations 
        to AI-generated compositions, the landscape of the industry 
        is evolving rapidly.\n\nBut will AI ever replace human creativity?`}
      />  
                )
            })}
            </VStack>
           
           
            <Aside posts={posts}/>
        </HStack>
    </VStack>
  )
}
