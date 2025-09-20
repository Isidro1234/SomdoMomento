import { Button, Card, Heading, HStack, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import MusicCard from '../../components/custom/MusicCard'
import Article from '../General/Article'
import ArticleCard from '../../components/custom/ArticleCard'
import PostCard from '../../components/custom/PostCard'
import * as Icon from 'react-bootstrap-icons';

export default function Posts() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null)
   const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
 const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  function getimage(){

  }
  console.log(text)
  return (
    <VStack padding={5} background={"white"} alignItems={"flex-start"} justifyContent={"flex-start"} width={"100%"} height={"100%"}>
      <VStack alignItems={"flex-start"}>
        <Heading>Postes</Heading>
        <HStack>
           <ArticleCard title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>
           <ArticleCard title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>
           <ArticleCard title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>
           <ArticleCard title={"sdfsdfsdf"} date={'12 Sept'} body={"sdfsfsdfsdfdsffdsf"}/>
        </HStack>
        <div style={{width:"100%",height:200, borderWidth:1, padding:10}}>
          <div style={{ marginBottom: 10 }}>
        <button onClick={() => toggleInlineStyle("BOLD")}><b>B</b></button>
        <button onClick={() => toggleInlineStyle("ITALIC")}><i>I</i></button>
        <button onClick={() => toggleInlineStyle("UNDERLINE")}><u>U</u></button>
      </div>
          <Editor
        editorState={editorState}
        onChange={setEditorState}     
        placeholder='Hello world'
      />
        </div>
          
      </VStack>
    </VStack>
  )
}
