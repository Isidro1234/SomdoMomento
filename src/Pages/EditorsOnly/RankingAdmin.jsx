import React, { useEffect, useState } from 'react'
import Slide from '../../components/custom/Slide'
import {Button} from '@chakra-ui/react/button'
import {Input} from '@chakra-ui/react/input'
import { HStack, VStack } from '@chakra-ui/react/stack'
import FileUploadCustom2 from '../../components/custom/FileUploadCustom2'
import {Toaster, toaster} from "../../components/ui/toaster"
import { storemedia } from '../../logic/handleStorageData'
import { useLogiState } from '../../states/useLogic'
import Paginator from '../../components/custom/Paginator'
import { Icon } from '@chakra-ui/react'


function RankingAdmin() {
    const [nome, setNome] = useState("")
    const [musica, setMusica] = useState("")
    const [numeroPlays, setNumeroPlays] = useState("")
    const [rank, setRank] = useState(0)
    const [Category, setCategory] = useState("")
    const [image, setImage] = useState(null)
    const submitSlide = useLogiState((state)=>state.setSlide)
    const [video, setVideo] = useState(null)
    const gettingSlides = useLogiState((state)=>state.getSlides)
    const setdeleteRank = useLogiState((state)=>state.deleteRanking)
    const [videoLink, setLinkvideo] = useState("")
    const [senderimage, setsenderimage] = useState(null)
    const slides = useLogiState((state)=>state.slides)
    const [socialLinks, setSocialLinks] = useState(()=>({
        youtube:"",
        soundcloud:"",
        spotify:"",
        applemusic:""
    }))
      const [width, setWidth] = useState(window.innerWidth)
      const [currentSlide, setCurrentSlide] = useState(0)
      // Handle window resize
      useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }, [])
      useEffect(()=>{
            async function getting(){
                const result = await gettingSlides()
            }
            getting()
        }, [])
      // Auto-slide every 10s
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 10000)
        return () => clearInterval(interval)
      }, [slides.length])
    async function handlePic(f){
        if(f.size > 500000){
            toaster.create({
                title:"Aviso tamanho da imagem ",
                description:`A imagem enviada tem ${f.size / 1000} kilobytes que e mais do que os 500 kilobytes permitidos `,
                duration:5000,
                type:"error"
            })
            return;
        }
        const filereader = new FileReader()
        filereader.onload = (e)=>{
            setImage(e.target.result)
        }
        filereader.readAsDataURL(f)
        setsenderimage(f)
        
    }
    async function handleVideo(fs){
        const filereader = new FileReader()
        filereader.readAsDataURL(fs)
        if(fs.size > 80000000){
            toaster.create({
                title:"Aviso tamanho da imagem ",
                description:`A imagem enviada tem ${fs.size / 1000} kilobytes que e mais 
                do que os 5 Megabytes permitidos `,
                duration:5000,
                type:"error"
            })
            return;
        }
        const url = await storemedia(fs)
        if(!url){
           toaster.create({
                title:"Aviso erro de connecao ",
                description:`nao foi possivel enviar esta imagem de momento porfavor tente mais tarde`,
                duration:5000,
                type:"error"
            })
            return; 
        }
        setVideo(url)
         toaster.create({
                title:"imagem enviada com sucesso",
                description:`Sua imagem foi enviada com sucesso`,
                duration:5000,
                type:"success"
            })
            return;
    }
    async function handleSubmit(){
        const urlt = await storemedia(senderimage)
        if(!urlt){
           toaster.create({
                title:"Aviso erro de connecao ",
                description:`nao foi possivel enviar esta imagem de momento porfavor tente mais tarde`,
                duration:5000,
                type:"error"
            })
            return; 
        }

        setImage(urlt)
         toaster.create({
                title:"imagem enviada com sucesso",
                description:`Sua imagem foi enviada com sucesso`,
                duration:5000,
                type:"success"
            })
        if(!nome || !urlt || !rank || !numeroPlays || !musica || !Category ){
            toaster.create({
                title:"Aviso preencha todas as lacunas",
                description:`algumas lacunas nao foram preenchidas`,
                duration:5000,
                type:"error"
            })
            return;
        }
        const iframecode = videoLink || false
        const result = await submitSlide(nome,rank,urlt, numeroPlays, 
            video, musica, Category, socialLinks, iframecode )
        if(result){
            toaster.create({
                title:"Slide enviado com sucesso",
                description:`O seu Slide foi enviado com sucesso`,
                duration:5000,
                type:"success"
            })
            setNome("")
            setRank(0)
            setMusica(null)
            setCategory("")
            setVideo(null)
            setNumeroPlays(0)
            setSocialLinks(()=>({
                youtube:"",
                soundcloud:"",
                spotify:"",
                applemusic:""
            }))
            return;
        }else{
            toaster.create({
                title:"Erro de envio",
                description:`occorreu um erro ao enviar o slide, porfavor tente mais tarde`,
                duration:5000,
                type:"error"
            })
            return;
        }
    }
    function handlevideolink(e){
        const linkvd = e.target.value;
        console.log(linkvd)
        const checkplaylist = String(linkvd).includes("?list");
        const pross = checkplaylist ? (String(linkvd)?.split("/")[3]?.split("?list") || "") :
        (String(linkvd)?.split("/")[3]);
        const checkifarry = Array.isArray(pross);
        const finalvideocode = checkifarry ? pross?.[0] + "?si" + pross?.[1] : pross;
        const checov = finalvideocode || false
        setLinkvideo(checov);
        console.log(checov)
    }
    async function handledeleteRank(id){
      const result = await setdeleteRank(id);
      if(result){
        toaster.create({
            type:"success",
            title:"Rank eliminado",
            description:"Parabens voce eliminou um rank",
            duration:2000
        })
        return;
      }
       toaster.create({
            type:"error",
            title:"Rank nao eliminado",
            description:"algo deu errado, verifique sua coneccao ",
            duration:2000
        })
    }

  return (
    <VStack  width={"100%"} overflowX={"hidden"} alignItems={"flex-start"}>
         <HStack
                gap={0}
                transform={`translateX(-${!videoLink ? currentSlide * (100) : 0}vw)`}
                transition="transform 0.5s ease"
                width={`${(100) * slides.length}vw`}
                height="100%"
              >
                {videoLink ?
                <Slide category={Category} 
                        rank={rank}
                        streams={numeroPlays} 
                        musictitle={musica} iframevid={videoLink}
                        videourl={video} artistpic={image} artistname={nome} 
                        width={"100vw"}/>
                        :
                <>
            {slides?.map((item,index)=>{

                  return(
                    <VStack position={"relative"}>
                        <Button  borderRadius={50} 
                        onClick={()=>handledeleteRank(item?.id)} left={2} top={2} zIndex={2000} position={"absolute"} bg={"red"}>Deletar</Button>
                        <Slide category={item?.Category} key={index} 
                        rank={item?.rank} socialLinks={item?.socialLinks} 
                        streams={item?.numeroPlays} publishedate={item?.date} 
                        id={item?.id} musictitle={item?.musica} 
                        videourl={item?.video} artistpic={item?.image} artistname={item?.nome} 
                        width={"100vw"} currentSlide={currentSlide === index}/> 
                    </VStack>
                    )
                }) }
                
                <HStack zIndex={7} position="absolute" bottom={15} left={10}>
                    {slides.map((_, index) => (
                        <Paginator key={index} current={currentSlide === index} />
                    ))}
                </HStack>
                </>
               }
                
        </HStack>
        
       <VStack flexWrap={"wrap"} padding={2}  justifyContent={"flex-start"} alignItems={"flex-start"}>
        <HStack flexWrap={"wrap"}>
              <FileUploadCustom2 onchanges={(e)=>{handlePic(e)}} placeholder={"Upload Artist Image"}/>
              <FileUploadCustom2 onchanges={(es)=>{handleVideo(es)}} placeholder={"Upload video"}/>
              <Input  onChange={handlevideolink} placeholder='Youtube Video Link'/>
        </HStack>
        <HStack width={"100%"}>
            <Input value={rank} onChange={(e)=>{setRank(e.target.value)}} type='number' placeholder='Posicao no top'/>
        </HStack>
        <HStack width={"100%"} alignItems={"center"}>
            <Input value={nome} onChange={(e)=>{setNome(e.target.value)}} placeholder='Nome do Artista'/>
            <Input value={musica} onChange={(e)=>{setMusica(e.target.value)}} placeholder='Titulo da Musica'/>
            <Input value={numeroPlays} onChange={(e)=>{setNumeroPlays(e.target.value)}} type='number' placeholder='Numero de Plays'/>
            <Input value={Category} onChange={(e)=>{setCategory(e.target.value)}} placeholder='Categoria'/> 
          
        </HStack>
        <HStack width={"100%"}>
            <Input onChange={(e)=>setSocialLinks((prev)=>({...prev, spotify:e.target.value}))} placeholder='Link do Spotify'/>
            <Input onChange={(e)=>setSocialLinks((prev)=>({...prev, applemusic:e.target.value}))} placeholder='Link do Apple Music'/>
            <Input onChange={(e)=>setSocialLinks((prev)=>({...prev, youtube:e.target.value}))}placeholder='Link do Youtube Music'/>
            <Input onChange={(e)=>setSocialLinks((prev)=>({...prev, soundcloud:e.target.value}))} placeholder='Link do SoundCloud'/>
        </HStack>
        
        <Button onClick={handleSubmit} width={"100%"}>Enviar Slide</Button>
        <Toaster/>
        
       </VStack>
    </VStack>
  )
}

export default  React.memo(RankingAdmin)


