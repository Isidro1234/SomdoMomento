import { Button, HStack, Input, Spinner } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as Icon from 'react-bootstrap-icons';
import { useLogiState } from "../../states/useLogic";
import {Toaster , toaster } from "../ui/toaster"
import { storemedia } from "../../logic/handleStorageData";
import { useAuthcontext } from "../../Context/AuthContextProvider";
const MAX_SIZE = 490000
export default function TextEditor({placeholder,to}) {
  const  {userdata}  = useAuthcontext()
  const [value, setValue] = useState("");
  const picref = useRef(null);
  const quillRef = useRef(null);
  const [title, setTitle] = useState("")
  const [loader, setLoader]= useState(false)
  const postar = useLogiState((state)=>state.setPosts)
  const [imageCover, setImageCover] = useState(null)
  const modules = {
    toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [
        { align: ["", "center", "right", "justify"] },
        { color: ["blue", "red", "yellow", "black"] },
        { background: [] },
      ],
      ["clean"],
    ],
    handlers: {
      image: quillImage, // 👈 attach custom handler here
    },
  },
  };

  const formats = [
    "header",
    "bold", "italic", "underline", "strike",
    "list",
    "link", "image", "video",
    "align", "color", "background"
  ];
  async function pic(file){
    setLoader(true)
    if(!file) {
        setLoader(false) 
        return;};
    if(file.size >= MAX_SIZE) {
        toaster.create({
            title:"Aviso Tamanho da foto",
            description:`Essa imagem tem um tamanho acima do limite para garantir a performance deste blog, porfavor apenas insira imagens abaixo de 500 kilobytes, a imagem inserida tem
            ${file.size} bytes que sao ${Math.floor(file.size / 1000)} kilobytes, Voce pode comprimir essa imagem de modo a reduzir o tamanho. podes usar este website: https://www.iloveimg.com/ para fazer isso`,
            type:"warning",
            duration:5000
        })
        console.log("error")
        setLoader(false)
        return;
    }
    const filereader = new FileReader();
    filereader.readAsDataURL(file)
    const result = await storemedia(file)
    if(!result){
        setLoader(false)
        return;
    } 
    setImageCover(result)
     toaster.create({
            title:"Foto Submetida",
            description:`Imagem submetida com successo`,
            type:"success",
            duration:2000
        })
     setLoader(false) 
  }
  async function quillImage() {
    const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (!file) {
        setLoader(false)
        return
    };

    if (file.size >= MAX_SIZE) {
      toaster.create({
        title: "Aviso Tamanho da foto",
        description: `Essa imagem tem ${Math.floor(file.size / 1000)} KB, acima do limite de 500 KB.`,
        type: "warning",
        duration: 5000,
      });
      setLoader(false)
      return;
    }
    const url = await storemedia(file);
    if(!url){
        setLoader(false)
        return;
    } 
    const range = quillRef.current.getEditor().getSelection();
    quillRef.current
      .getEditor()
      .insertEmbed(range.index, "image", url);
  };
  setLoader(false)
  }
  async function post(){
    setLoader(true)
    if(!title || !imageCover || !value || !to) {
        toaster.create({
        title: "Aviso Porfavor preencha tudo",
        description: `preencha tudo, tanto a imagem, o titulo e o artigo`,
        type: "warning",
        duration: 5000,
      });
      setLoader(false)
        return
    }
    const result = await postar(title, imageCover, value , to, userdata)
    if(result){
        setLoader(false)
        setValue("")
        setTitle("")
        setImageCover(null)
        toaster.create({
        title: "Postagem Publicada com sucesso",
        description: `Sua postagem foi publicada com sucesso`,
        type: "success",
        duration: 5000,
      });
      return
    }
     toaster.create({
        title: "Erro de Envio",
        description: `Ocorreu um erro de envio, que pode estar relacionado com a sua rede movel,
        porfavor ajuste sua rede movel, e tente mais tarde. em caso de erros contacte o isidoro`,
        type:"error",
        duration: 5000,
      });
    setLoader(false)
  }
  return (
    <div style={{ width: "100%", display:'flex', flexDirection:"column", gap:5 }}>
      <HStack>
        <Input value={title} onChange={(e)=>setTitle(e.currentTarget.value)} borderRadius={50} placeholder={placeholder}/>
        <Input onChange={(e)=>pic(e.currentTarget.files[0])} ref={picref} hidden type="file" accept="image/jpeg, image/png"/>
        <Button onClick={()=>{picref.current.click()}} borderWidth={1} borderColor={"#e1e1e1ff"} borderRadius={50} bg={"white"}> {!loader ?  <Icon.Image color="black"/>  : <Spinner color={"black"} size={"sm"}/> } </Button>
      </HStack>
      <ReactQuill
      ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Write something..."
        style={{ height: 200 }}
      />
      <Toaster/>
      <Button onClick={post} marginTop={50}>{!loader ? "Postar" : <Spinner color={"black"} size={"sm"}/>}</Button>
    </div>
  );
}
