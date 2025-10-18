import { Heading, Image, Spinner, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Nav from '../../components/custom/Nav'
import { useLogiState } from '../../states/useLogic';
import MusicBoxCard from '../../components/custom/MusicBoxCard';
import NewsPreview from '../../components/custom/NewsPreview';
import ArticleCard from '../../components/custom/ArticleCard';
import MainNews from '../../components/custom/MainNews';
import SidebarNews from '../../components/custom/SidebarNews';
import StatusComp from '../../components/custom/StatusComp';

export default function SearchPage() {
  const {id} = useParams();
  const getNoticias  = useLogiState((state)=>state.getPosts)
  const gettingmusic = useLogiState((state)=>state.getMusic)
  const getpost = useLogiState((state)=>state.getPosts)
  const statusget = useLogiState((state)=>state.getStatus)
  const stats = useLogiState((state)=>state.status)
  const posts = useLogiState((state)=>state.posts)
  const Noticias = useLogiState((state)=>state.noticias)
  const musicas = useLogiState((state)=>state.musicas);
  const [found, setFound] = useState(0);
  const [loading, setLoading] = useState(false)
  const decodedId = decodeURIComponent(id);
  useEffect(()=>{
    setLoading(true)
      async function getting(){
        await getNoticias("noticias")
        await gettingmusic()
        await getpost("postes")
        await statusget()
        setLoading(false)
      }
      getting()
  }, [])
  const filterPosts = 
  posts?.filter((p)=>String(p?.title)
  .toLowerCase().trim() == String(decodedId)
  .toLowerCase().trim() || String(p?.title).toLowerCase().trim().includes(String(decodedId).toLowerCase().trim()))
  
  const filterNoticias = 
  Noticias?.filter((n)=>String(n?.title).
  toLowerCase().trim()  == String(decodedId).
  toLowerCase().trim() || String(n?.title).toLowerCase().trim().includes(String(decodedId).toLowerCase().trim()))

  const filterMusicas = 
  musicas?.filter((m)=>String(m?.artistSongTitle).toLowerCase().trim() == String(decodedId).toLowerCase().trim() || 
  String(m?.artistname).toLowerCase().trim() == String(decodedId).toLowerCase().trim()
   || String(m?.title).toLowerCase().trim().includes(String(id).toLowerCase().trim()))
  
  const filterStatus = 
  stats?.filter((s)=>String(s?.artistName).toLowerCase().trim() == String(decodedId)
  .toLowerCase().trim() || String(s?.artistName).toLowerCase().trim().includes(String(decodedId).toLowerCase().trim()))
  
  useEffect(()=>{
    setFound(0)
    if(filterMusicas?.length <= 0 && filterPosts?.length <= 0 && filterStatus?.length <= 0 && filterNoticias?.length <= 0 ){
        setFound(0)
    }else{
        filterMusicas.length > 0 && setFound((prev)=> prev + filterMusicas.length)
        filterNoticias.length > 0 && setFound((prev)=> prev + filterNoticias.length)
        filterPosts.length > 0 && setFound((prev)=> prev + filterPosts.length)
        filterStatus.length > 0 && setFound((prev)=> prev + filterStatus.length)
      }
      return
      console.log(found)
  
  }, [filterMusicas.length, filterNoticias.length , filterPosts.length , filterStatus.length])
  
  return (
    <VStack width={"100%"}>
      <Nav/>
       {loading &&   <Spinner/>} 
       {!loading  && 
      <VStack  gap={10} padding={10} alignItems={"flex-start"}>
        <Heading color={"gray"} fontSize={25}>Pesquisa : {`"${id}"`} {found != 0 ? found + " resultados" : found + " encontrado"}</Heading>
      {
        filterMusicas?.map((item,index)=>{
          return(
            index <= 4 &&
              <MusicBoxCard 
              name={item?.artistname} 
              title={item?.artistSongTitle} 
              image={item?.artistpic} 
              music={item?.artistSong} 
              key={index} 
              color={"gray"}/>
                           
          )
        })
      }
       {
        filterNoticias?.map((item,index)=>{
          return(
            index <= 4 &&
            (item?.select == "principal" ?
            <MainNews 
            title={item?.title} 
            image={item?.imagecover} 
            category={item?.category} 
            data={item?.userdata} 
            key={index}/>
            : <SidebarNews/>)
          )
        })
      }
      {
        filterPosts?.map((item,index)=>{
          return(
            index <= 4 &&
            <ArticleCard key={index}
              title={item.title} 
              date={item.date} 
              author={item.userdata.username}
              body={item.html}
              id={item?.id}
              />  
          )
        })
      }
      {
        filterStatus?.map((item,index)=>{
          return(
            index <= 4 &&
            <StatusComp 
              id={item?.id} 
              key={index} artistname={item?.artistName} 
              link={item?.instaLink}
              image={item?.artistImage}
              media={item?.image} description={item?.description}  
              icon={<Image width={20} height={20} borderRadius={50} 
              src={item?.image}/>}/>
          )
        })
      }
      </VStack>
      
        }
    </VStack>
  )
}
