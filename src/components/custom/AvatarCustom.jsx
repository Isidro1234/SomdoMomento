import { Avatar } from '@chakra-ui/react'
import React from 'react'

export default function AvatarCustom({image, name, size, fontSize}) {
  return (
    <Avatar.Root borderRadius={10} size={!size ? "md" : size}>
        {image &&
        <Avatar.Image borderRadius={10} alt='user avatar' src={image}/>
        }
        {name && 
        <Avatar.Fallback borderRadius={10} fontSize={fontSize} name={name}/>
        }
    </Avatar.Root>
  )
}
