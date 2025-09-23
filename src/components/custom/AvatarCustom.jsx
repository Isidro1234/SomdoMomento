import { Avatar } from '@chakra-ui/react'
import React from 'react'

export default function AvatarCustom({image, name, size, fontSize}) {
  return (
    <Avatar.Root size={!size ? "md" : size}>
        {image &&
        <Avatar.Image alt='user avatar' src={image}/>
        }
        {name && 
        <Avatar.Fallback fontSize={fontSize} name={name}/>
        }
    </Avatar.Root>
  )
}
