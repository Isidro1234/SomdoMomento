import {create} from "zustand"
import DOMPurify from "dompurify"
export const useLogiState = create((set,get)=>({
    posts:[],
    noticias:[],
    destaques:[],
    musicas:[],
    slides:[],
    setPosts:async(title,imagecover, value, to, userdata)=>{
        try {
            const html = DOMPurify.sanitize(value, {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling", "src"]})
        const addPost = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/db/post",{
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body:JSON.stringify({title, imagecover, html, to, userdata})
        })
        const res = await addPost;
        const data = await res.json()
        if(data.success){
            return true
        }
        return false
        } catch (error) {
            console.log(error.message)
            return false
        }
        
    }, getPosts :async(to)=>{
        try {
            console.log(to)
             const post = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/db/get",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({to})
            }) 
            const res =  await post;
            const data = await res.json()
            if(data.success){
              switch(to){
                case "postes":
                  set({post:data.data})
                  break;
                case "destaques":
                    set({destaques:data.data})
                    break;
                case "noticias":
                    set({noticias:data.data})
                    break;
              }
              return;
            }
            set({post:[]})
            set({destaques:[]})
            set({noticias:[]})
        } catch (error) {
            set({post:[]})
            set({destaques:[]})
            set({noticias:[]})
            console.log(error.message)
        }
    },
    subscribeToNewsLetter:async(email)=>{
         try {
             const news = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/email/addtonewsletter",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({email})
            }) 
            const res =  await news;
            const data = await res.json()
            if(data.success){
              return true
            }
            return false
        } catch (error) {
            console.log(error.message)
            return false
            
        }
    },setSlide:async(nome,rank, image, numeroPlays, video, musica, Category, socialLinks)=>{
        try {
             const news = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/pages/addslide",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({nome,rank, image, numeroPlays, video, musica, Category, socialLinks})
            }) 
            const res =  await news;
            const data = await res.json()
            if(data.success){
              return true
            }
            return false
        } catch (error) {
            console.log(error.message)
            return false
            
        }
    },slideconfig:async()=>{

    },getSlides:async()=>{
        console.log("hello")
        try {
            const news = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/pages/get") 
            const res =  await news;
            const data = await res.json()
            if(data.success){
                console.log(data.data)
              set({slides:data.data.reverse()})
              return true
            }
            return false
        } catch (error) {
            console.log(error.message)
            return false
            
        }
    },addmusic:async(artistname,artistSongTitle,artistpic, artistSong)=>{
        try {
             const news = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/musica/add",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({artistname,artistSongTitle,artistpic, artistSong})
            }) 
            const res =  await news;
            const data = await res.json()
            if(data.success){
              return true
            }
            return false
        } catch (error) {
            console.log(error.message)
            return false
            
        }
    },removemusic:async(id)=>{
        console.log(id)
        try {
             const news = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/musica/remove",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({id})
            }) 
            const res =  await news;
            const data = await res.json()
            if(data.success){
              return true
            }
            return false
        } catch (error) {
            console.log(error.message)
            return false
            
        }
    },getMusic:async()=>{
       try {
            const news =  await fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/musica/get") 
            const data = await news.json()
            if(data.success){
              console.log(data.datas)
              set({musicas:data.datas})
              return true
            }
            return false
        } catch (error) {
            console.log(error.message)
            return false
            
        } 
    }
}))