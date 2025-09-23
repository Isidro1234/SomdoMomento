import {create} from "zustand"
import DOMPurify from "dompurify"
export const useLogiState = create((set,get)=>({
    posts:[],
    musicas:[],
    setPosts:async(title,imagecover, value, to, userdata)=>{
        try {
            const html = DOMPurify.sanitize(value, {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling", "src"]})
        const addPost = fetch("http://localhost:7000/som_do_momento/api/db/post",{
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
             const post = fetch("http://localhost:7000/som_do_momento/api/db/get",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({to})
            }) 
            const res =  await post;
            const data = await res.json()
            if(data.success){
              set({post:data.data})
              return;
            }
            set({post:[]})
        } catch (error) {
            set({post:[]})
            console.log(error.message)
        }
    },
    subscribeToNewsLetter:async(email)=>{
         try {
             const news = fetch("http://localhost:7000/som_do_momento/api/email/addtonewsletter",{
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
    },setSlide:async(video, coverimage, artisimage, artisname, artistsong, plays, spotifylink, applemusiclink, rankinNumber)=>{

    },slideconfig:async()=>{

    },getSlides:async()=>{

    },addmusic:async(artistname,artistSongTitle,artistpic, artistSong)=>{
        try {
             const news = fetch("http://localhost:7000/som_do_momento/api/musica/add",{
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
             const news = fetch("http://localhost:7000/som_do_momento/api/musica/remove",{
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
            const news =  await fetch("http://localhost:7000/som_do_momento/api/musica/get") 
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