import { Box, Button, Card, Heading, HStack, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
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
        <Heading>Postes</Heading>
        <HStack style={{flexWrap:"wrap", width:"100%"}}>
                {post?.map((item,index)=>{
                    return(<ArticleCard to={"postes"} id={item?.id} edimode={true} title={item.title} date={item.date} author={item.userdata.username} key={index} body={item.html}/>)
                 })}
          
        </HStack> 
         <TextEditor placeholder={"Digite o titulo do seu Artigo"} to={"postes"}/>
    </VStack>
  )
}
