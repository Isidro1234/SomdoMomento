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
  const getpost = useLogiState((state)=>state.getPosts)
  const post = useLogiState((state)=>state.post)
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
    <VStack padding={5} background={"white"} alignItems={"flex-start"} justifyContent={"flex-start"} width={"100%"} height={"100%"}>
          <VStack alignItems={"flex-start"}>
            <Heading>Postes</Heading>
            <HStack overflowX={"scroll"}>
              {post?.map((item,index)=>{
                return(<ArticleCard title={item.title} date={item.date} author={item.userdata.username} key={index} body={item.html}/>)
              })}
               
            </HStack>
          </VStack>
         <TextEditor placeholder={"Digite o titulo do seu Artigo"} to={"postes"}/>
        </VStack>
  )
}
