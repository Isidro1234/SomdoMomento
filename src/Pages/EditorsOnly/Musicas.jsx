import { Button, Heading, HStack, Table, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MusicCard from '../../components/custom/MusicCard'
import DialogCustom from '../../components/custom/DialogCustom'
import { useLogiState } from '../../states/useLogic'

export default function Musicas() {
    const musicas = useLogiState((state)=>state.musicas)
    const getmusic = useLogiState((state)=>state.getMusic)
    useEffect(()=>{
        async function getmus(){
           const result = await getmusic()
        }
        getmus()
    }, [])
    return (
    <VStack width={"100%"}><Table.Root size="sm">
      <Table.Header width={"100%"}>
        <Table.Row >

          <Table.ColumnHeader flex={1}>
            <HStack>
                <Heading flex={1}>Musica</Heading>
                 <DialogCustom/>
            </HStack>
            
            </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {musicas?.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell><MusicCard id={item?.id} image={item?.artistpic} title={item?.artistSongTitle} audio={item?.artistSong} artist={item?.artistname}  editmode={true} noborder={0.3} padding={5} /></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </VStack>
     
  )
}
