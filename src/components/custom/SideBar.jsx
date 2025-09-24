import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import AvatarCustom from './AvatarCustom';
import { Link } from 'react-router';
import { useAuthcontext } from '../../Context/AuthContextProvider';
export default function SideBar({onclicks,states}) {
    const {userdata}  = useAuthcontext()
  return (
    <VStack padding={4} alignItems={"flex-start"} flex={1} background={"#242424ff"}>
        <VStack flex={1} alignItems={"flex-start"}>
            <Link to={"/admin/"}><Button bg={"transparent"}><Icon.Plus/> Postes</Button></Link>
            <Link to={"/admin/NoticiasAdmin"}><Button bg={"transparent"}><Icon.Newspaper/>Noticias</Button></Link>
            <Link to={"/admin/DestaquesAdmin"}><Button bg={"transparent"}><Icon.Stickies/> Destaques</Button></Link>
            <Link to={'/admin/musicas'}><Button bg={"transparent"}><Icon.MusicNote/> Musicas</Button></Link>
            <Link to={"/admin/RankingAdmin"}><Button bg={"transparent"}><Icon.Trophy />Ranking</Button></Link>
            <Link to={"/admin/Paginas"}><Button bg={"transparent"}><Icon.Globe/> Paginas</Button></Link>  
            <Link to={"/admin/Definicoes"}><Button bg={"transparent"}><Icon.Gear/>Definições</Button></Link>  
        </VStack>
        <AvatarCustom name={userdata?.username || "Admin"}/>
    </VStack>
  )
}
