import { Avatar } from '@chakra-ui/react'
import React from 'react'

export default function AvatarCustom({image, name}) {
  return (
    <Avatar.Root>
        {image &&
        <Avatar.Image src={image}/>
        }
        {name && 
        <Avatar.Fallback name={name}/>
        }
    </Avatar.Root>
  )
}
