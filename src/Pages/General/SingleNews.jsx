import { VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useLogiState } from '../../states/useLogic';
import MainNews from '../../components/custom/MainNews';

function SingleNews() {
  const {id} = useParams();
  const getNoticias  = useLogiState((state)=>state.getPosts)
  const Noticias = useLogiState((state)=>state.noticias)
  const decodedId = decodeURIComponent(id);
  const navigate = useNavigate()
    useEffect(()=>{
      async function gettingNoticias(){
        await getNoticias("noticias")
      }
      gettingNoticias()
    },[])
  const findNews = Noticias?.filter((noticia)=>noticia?.title.trim() == decodedId.trim());
  useEffect(()=>{
      if(findNews.length <= 0){
        navigate("/")
      }
  },[])
  
 console.log(id, findNews, Noticias)
  return (
    <VStack width={"100%"} padding={5}>
       <MainNews
       isNotLink={true}
       key={decodedId}
       html={findNews?.[0]?.html}
       title={findNews?.[0]?.title}
       category={findNews?.[0]?.category}
       data={findNews?.[0]?.userdata}
       image={findNews?.[0]?.imagecover}
       />
    </VStack>
  )
}
export default React.memo(SingleNews)
