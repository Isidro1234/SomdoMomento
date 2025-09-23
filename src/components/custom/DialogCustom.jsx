import { Button, Dialog, HStack, Input, Portal, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import UploadArea from './UploadArea'
import * as Icon from 'react-bootstrap-icons';
import { storemedia } from '../../logic/handleStorageData';
import { useLogiState } from '../../states/useLogic';
import {Toaster, toaster} from "../ui/toaster"
export default function DialogCustom({icon}) {
  const imageref = useRef(null)
  const [artistname, setArtistName] = useState("")
  const [artistSongTitle, setArtistSongTitle] = useState("")
  const [artistpic, setartistipic] = useState(null)
  const submitsong = useLogiState((state)=>state.addmusic)
  const [artistSong, setArtistSong] = useState(null)
  async function handleArtistPic(f){
    const file = new FileReader()
    file.readAsDataURL(f);
    if(f.size > 500000){
      toaster.create({
            title:"Aviso Tamanho",
            description:` A imagem enviada tem um tamanho ${f.size} que e maior que 500 kilobyte que e o limite`,
            type:"warning",
            duration:2000
        })  
        return;
    }
    const geturl= await storemedia(f);
    if(geturl){
        toaster.create({
            title:"imagem enviada",
            description:"imagem enviada com sucesso",
            type:"success",
            duration:2000
        })
    }
    setartistipic(geturl)
  }
  async function handleArtistSong(fs){
    const file = new FileReader()
    file.readAsDataURL(fs);
    if(fs.size > 10000000){
      toaster.create({
            title:"Aviso Tamanho",
            description:` A musica enviada tem um tamanho ${fs.size} que e maior que 500 kilobyte que e o limite`,
            type:"warning",
            duration:2000
        })  
        return;
    }
    const geturl= await storemedia(fs);
    if(geturl){
        toaster.create({
            title:"musica enviada",
            description:"musica enviada com sucesso",
            type:"success",
            duration:2000
        })
    }
    setArtistSong(geturl)
  }
  async function submitMusic(){
    if(!artistSong || !artistSongTitle || !artistpic || !artistSong){
       toaster.create({
            title:"lacunas em branco",
            description:"porfavor preencha todas as lacunas",
            type:"warning",
            duration:2000
        }) 
    }
    const result = await submitsong(artistname,artistSongTitle,artistpic, artistSong);
    if(result){
        toaster.create({
            title:"musica enviada",
            description:"musica enviada com sucesso",
            type:"success",
            duration:2000
        })
        setArtistName("")
        setArtistSongTitle("")
        imageref.current.value = null
    }
  }
  return (
    <Dialog.Root size={"md"} placement={"center"}>
        <Dialog.Trigger asChild>
            <Button bg={"transparent"} color={"black"} borderRadius={50}><Icon.Plus /></Button>
        </Dialog.Trigger>
        <Portal >
            <Dialog.Backdrop/>
            <Dialog.Positioner>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title>Enviar Musica</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                    <HStack margin={4} marginLeft={0} gap={2} alignItems={"center"}>
                        <Input value={artistname} onChange={(e)=>setArtistName(e.target.value)} placeholder='Nome do Artista'/>
                        <Input value={artistSongTitle} onChange={(e)=>setArtistSongTitle(e.target.value)} placeholder='Titulo da musica'/>
                        <Input  onChange={(ev)=>handleArtistPic(ev.target.files[0])} accept={"image/*"} ref={imageref} type='file' hidden/>
                        <Button onClick={()=>{imageref.current.click()}} bg={"transparent"} color={"black"} borderWidth={1} borderColor={"#e6e6e6"} borderRadius={10}><Text fontSize={10}>foto do artista</Text> <Icon.Image/></Button>
                    </HStack>
                    <UploadArea onchanges={(e)=>handleArtistSong(e)}/>
                    <Button onClick={submitMusic}>enviar</Button>
                </Dialog.Body> 
                </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
        <Toaster/>
    </Dialog.Root>
  )
}
