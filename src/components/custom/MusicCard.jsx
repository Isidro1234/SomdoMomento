import { Avatar, Box, Button, Card, HStack, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import AvatarCustom from './AvatarCustom';
import AudioPlayerGraph from './AudioPlayerGraph';
import ArtistCard from './ArtistCard';
import { useLogiState } from '../../states/useLogic';



export default function MusicCard({audio,editmode, image, artist, title, songtime, padding, noborder, notime, id}) {
    const audioRef =useRef(null);
    const [playStop , setPlayStop] = useState(false)
    const [playtime, setPlayTime] = useState(0)
    const deletingmusic = useLogiState((state)=>state.removemusic)
    async function deleteMusic(){
      await deletingmusic(id)
    }
  return (
    <Card.Root borderWidth={noborder || 1.5} width={"100%"} borderRadius={20} minWidth={10}>
        <Card.Body minWidth={10} >
          <HStack minWidth={10} height={padding  || 50} >
            <ArtistCard image={image} title={title} artist={artist}/>
            <HStack minWidth={10} onClick={()=>playStop ? setPlayStop(false) : setPlayStop(true)}>
              {playStop ?
              <Icon.PauseFill size={30}/>
              :
               <Icon.PlayFill size={30}/>
            }
            </HStack>
            <Text>{Math.floor(playtime / 60)} : {Math.floor(playtime % 60).toString().padStart(2, "0")}</Text>
            <AudioPlayerGraph 
            audio={audio}
            onTimeUpdate={(e) => setPlayTime(e)}
            isplaying={playStop}
            setplaying={setPlayStop}
          />
            <Icon.Download/>
            {editmode &&
            <HStack alignItems={"center"} gap={1}>
             <Button onClick={deleteMusic} bg={"transparent"} color={"red"}><Icon.TrashFill/></Button>
             </HStack>
            }
          </HStack>  
        </Card.Body>
    </Card.Root>
  )
}
