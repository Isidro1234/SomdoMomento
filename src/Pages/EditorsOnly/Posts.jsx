import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import {EditorState, RichUtils} from 'draft-js';
import {HStack, VStack } from '@chakra-ui/react/stack'
import {Heading} from '@chakra-ui/react/heading'
import 'draft-js/dist/Draft.css';
import ArticleCard from '../../components/custom/ArticleCard'
import TextEditor from '../../components/custom/TextEditor';
import { useLogiState } from '../../states/useLogic';

export default function Posts() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null)
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const widthT = window.screen.width;
  const getpost = useLogiState((state)=>state.getPosts)
  const post = useLogiState((state)=>state.posts)
  const [readOnly, setReadOnly] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(()=>{
    async function getpst(){
      await getpost("postes")
    }
    getpst()
  }, [])
 const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  function getimage(){

  }
  console.log("this is an wrray" ,post)
  return (
    <VStack height={"100%"} width={"100%"} overflowY={"auto"} padding={5} background={"white"} alignItems={"flex-start"} justifyContent={"flex-start"}>
       <TextEditor placeholder={"Digite o titulo do seu Artigo"} to={"postes"}/> 
       <Heading>Postes</Heading>
        <HStack display={"grid"} width={"100%"} gridTemplateColumns={"repeat(auto-fit,minmax(min(400px,100%), 1fr))"}>
                {post?.map((item,index)=>{
                    return(<ArticleCard to={"postes"} id={item?.id} edimode={true} title={item.title} date={item.date} author={item.userdata.username} key={index} body={item.html}/>)
                 })}
          
        </HStack> 
         
    </VStack>
  )
}
