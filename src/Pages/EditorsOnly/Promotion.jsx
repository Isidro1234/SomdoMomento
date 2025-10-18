import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react/stack'
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import PromotionPost from '../../components/custom/PromotionPost';

export default function Promotion() {

  return (
    <VStack padding={5} alignItems={"flex-start"} width={"100%"}>
        <Heading>Promoção</Heading>
      <VStack width={'100%'} gap={2}  display={"grid"} 
      gridTemplateColumns={"repeat(auto-fit,minmax(min(400px, 100%),1fr))"} 
      alignItems={"flex-start"}>
      <PromotionPost/>
      
    </VStack>  
    </VStack>
    
  )
}
