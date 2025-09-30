import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import AvatarCustom from './AvatarCustom'
import AudioPlayerGraph from './AudioPlayerGraph'
import * as Icon from "react-bootstrap-icons"
import { useLogiState } from '../../states/useLogic'
export default function FixedPlayer({audio, image, artistname, title, isplaying, position}) {
  const audioRef =useRef(null);
    const [playStop , setPlayStop] = useState(isplaying)
    const [playtime, setPlayTime] = useState(0)
    const deletingmusic = useLogiState((state)=>state.removemusic)
    async function deleteMusic(){
      await deletingmusic(id)
    }
    async function download(url){
      try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${title}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // cleanup
    window.URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error("Download failed:", err);
  }
    }
  return (
    <HStack height={20} alignItems={"center"} bottom={0} position={position} left={0} zIndex={100} width={"100%"} padding={5} borderRadius={0} backgroundColor={"#0f0f0fbb"}>
       <HStack>
        <AvatarCustom image={image}/>
        <VStack justifyContent={"center"} alignItems={"flex-start"} gap={0}>
            <Text p={0} lineHeight={.7}>{title}</Text>
            <Text paddingLeft={.5} fontSize={10} color={"gray"}>{artistname}</Text>
        </VStack>
       </HStack>
       <HStack minWidth={10} onClick={()=>isplaying ? setPlayStop(false) : setPlayStop(true)}>
              {isplaying ?
              <Icon.PauseFill color='gray' size={30}/>
              :
               <Icon.PlayFill color='gray' size={30}/>
            }
            </HStack>
            <Text color='gray'>{Math.floor(playtime / 60)} : {Math.floor(playtime % 60).toString().padStart(2, "0")}</Text>
            <HStack height={10} padding={2} flex={1}>
                <AudioPlayerGraph 
            audio={audio}
            onTimeUpdate={(e) => setPlayTime(e)}
            isplaying={isplaying}
            setplaying={setPlayStop}
          />
            </HStack>
       <Button bg={"transparent"} color='gray'><Icon.ThreeDotsVertical/></Button>
       
    </HStack>
  )
}
  
