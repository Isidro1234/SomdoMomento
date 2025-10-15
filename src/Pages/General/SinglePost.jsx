import { HStack, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useLogiState } from '../../states/useLogic'
import ArticleCard from '../../components/custom/ArticleCard'
import Aside from '../../components/custom/Aside'

function SinglePost() {
  const {id} = useParams()
  const posts = useLogiState((state)=>state.posts)
  const getpost = useLogiState((state)=>state.getPosts)
  const navigate = useNavigate()

  useEffect(()=>{
    async function getPostsData(){
      await getpost
    }
    getPostsData()
  }, [])
  const findPost = posts?.filter((post)=>post?.title === id);
  useEffect(() => {
  if (findPost.length <= 0) {
    navigate("/")
  }
}, [findPost, navigate])
  return (
    <HStack justifyContent={"center"} flexWrap={"wrap"} gap={4} paddingTop={15} alignItems={"flex-start"} width={"100%"} h={"100vh"} >
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