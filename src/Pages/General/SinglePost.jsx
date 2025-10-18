import { HStack, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useLogiState } from '../../states/useLogic'
import ArticleCard from '../../components/custom/ArticleCard'
import Aside from '../../components/custom/Aside'
import { Helmet } from 'react-helmet-async'

function SinglePost() {
  const {id} = useParams()
  const posts = useLogiState((state)=>state.posts)
  const getpost = useLogiState((state)=>state.getPosts)
  const navigate = useNavigate();
  const decodedId = decodeURIComponent(id);

  useEffect(()=>{
    async function getPostsData(){
      await getpost
    }
    getPostsData()
  }, [])
  const findPost = posts?.filter((post)=>post?.title === decodedId);
  useEffect(() => {
    const findPost = posts?.filter((post)=>post?.title == id);
    if(posts.length > 0){
      if(findPost.length <= 0) {
        navigate("/")
      }
    }
}, [findPost])
  return (
    <HStack justifyContent={"center"} flexWrap={"wrap"} gap={4} paddingTop={15} alignItems={"flex-start"} width={"100%"} h={"100vh"} >
      <Helmet>
                <meta property="og:title" content={`Postes - ${findPost[0]?.title}`} />
                <meta property="og:description" content={`O Som do Momento é um blog dedicado
                   à música angolana e aos seus talentos. Aqui destacamos artistas locais, 
                   novos lançamentos, estilos como kizomba, kuduro, semba e afrohouse, 
                   além de entrevistas e críticas musicais. Celebramos a cultura de 
                   Angola e o som vibrante que define a nossa identidade.`} />
                <meta property="og:keywords" content={`musicas, soms, angola, portugal, brazil, musicas do meomento, musicas da banda, melhores soms de angola,
                  baixar musicas angolanas, baixar sons, som do momento, sm, som momento, danca com momento, som`} />
                <meta property="og:url" content={"https://somdomomento.netlify.app/"} />
                <meta property="og:type" content="homepage" />
                <title>Postes - {`${findPost[0]?.title}`}</title>
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
      
              </Helmet>
      <ArticleCard key={id} title={findPost[0]?.title} 
                    date={findPost[0]?.date} 
                    author={findPost[0]?.userdata.username}
                    body={findPost[0]?.html}
                    id={findPost[0]?.id} isNotLink={true}/>
     <Aside posts={posts}/>
    </HStack>
  )
}

export default SinglePost