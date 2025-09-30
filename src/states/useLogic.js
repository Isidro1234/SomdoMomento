import {create} from "zustand"
import DOMPurify from "dompurify"
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./config/firebase"
import { handlefeed } from "../logic/feed"
export const useLogiState = create((set,get)=>({
    posts:[],
    noticias:[],
    destaques:[],
    musicas:[],
    slides:[],
    sections:[],
    audioplaying:null,
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
            set((state)=>({
                posts:[...state.prev, {title, imagecover, html, to, userdata}]
            }))
            return true
        }
        return false
        } catch (error) {
            console.log(error.message)
            return false
        }
        
    }, getPosts :async(to)=>{
         try {
                const doref = collection(db,to);
                if(!doref.id){
                    return false
                }
                const getting = await getDocs(doref);
                const data = []
                getting.forEach((docs)=>{
                data.push(docs.data()) 
                })
                switch(to){
                    case "postes":
                        set({posts:data})
                        break;
                    case "destaques":
                        set({destaques:data})
                        break;
                    case "noticias":
                        set({noticias:data})
                        break;
                }
            } catch (error) {
                console.log(error.message) 
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
    const docref = collection(db,"slides");
    const getting = await getDocs(docref);
    if(!getting.empty){
        const data = [];
        getting.forEach((doc)=>{
            data.push(doc.data())
        })
        set({slides:data.reverse()})
    }
    } catch (error) {
        console.log(error)
    }  
    },addmusic:async(artistname,artistSongTitle,artistpic, artistSong, genre)=>{
        try {
             const news = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/musica/add",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({artistname,artistSongTitle,artistpic, artistSong, genre})
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
      const docref = collection(db,"musicas")
      const getting = await getDocs(docref);
      if(!getting.empty){
        const data = []
        getting.forEach((doc)=>{
            data.push(doc.data())
        })
        const datast = handlefeed(data)
        set({sections: [...datast]})
        set({musicas:data})
      }else{
        return set({musicas:[]})
      }
    } catch (error) {
        console.log(error.message)        
    }  
    },delePost:async(to, id)=>{
        try {
        const doref = doc(db,to,id);
        const getting = await getDoc(doref);
        if(getting.exists()){
            await deleteDoc(doref)
            return true
        } 
        return false
    } catch (error) {
       console.log(error.message) 
       return false
    }
    }, editPost:async(to,id,title,imagecover, html)=>{
        try {
        const doref = doc(db,to,id);
        const getting = await getDoc(doref);
        if(getting.exists()){
            await updateDoc(doref,{
                title,
                imagecover,
                html
            })
            return true
        } 
        return false
    } catch (error) {
       console.log(error.message) 
       return false
    }
    },setplaysongbottom:(audio, image, artistname, title, isplaying)=>{
        console.log(isplaying)
        set({audioplaying:[audio, image, artistname, title, isplaying]})
    },setHistoricoplay:async(audio, image, artistname, title)=>{
        try {
          const check = doc(collection(db,"Historicomusic"),where("audio", "==", audio))
          const getsc = await getDoc(check);
          if(getsc.exists()){
            return;
          }
          await addDoc(collection(db,"Historicomusic"),{
                audio, 
                image, 
                artistname, 
                title
            })  
            return true
        } catch (error) {
            console.log(error)
            return false
        }
            
    }
}))