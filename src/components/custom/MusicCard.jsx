import { Avatar, Box, Card, HStack, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import AvatarCustom from './AvatarCustom';
import AudioPlayerGraph from './AudioPlayerGraph';
import ArtistCard from './ArtistCard';



export default function MusicCard({audio, image, artist, title, songtime}) {
    const audioRef =useRef(null);
    const [playStop , setPlayStop] = useState(false)
    const [playtime, setPlayTime] = useState(0)
  return (
    <Card.Root width={"100%"} borderRadius={20}>
        <Card.Body  width={"100%"}>
          <HStack width={"100%"} height={50} >
            <ArtistCard  title={"New song"} artist={"genius"}/>
            <HStack onClick={()=>playStop ? setPlayStop(false) : setPlayStop(true)}>
              {playStop ?
              <Icon.PauseFill size={30}/>
              :
               <Icon.PlayFill size={30}/>
            }
            </HStack>
            <Text>{Math.floor(playtime / 60)} : {Math.floor(playtime % 60).toString().padStart(2, "0")}</Text>
            <AudioPlayerGraph onTimeUpdate={(e)=>setPlayTime(e)} isplaying={playStop} setplaying={()=>setPlayStop(true)} />
            <Text>3:00</Text>
            <Icon.Download/>
            <Icon.Heart/>
            <Icon.Share/>
          </HStack>  
        </Card.Body>
    </Card.Root>
  )
}
