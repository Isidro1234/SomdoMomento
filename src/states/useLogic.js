import {create} from "zustand"
import DOMPurify from "dompurify"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore"
import { db } from "./config/firebase"
import { handlefeed } from "../logic/feed"
import { storemedia } from "../logic/handleStorageData"
export const useLogiState = create((set,get)=>({
    posts:[],
    noticias:[],
    destaques:[],
    musicas:[],
    slides:[],
    comments:[],
    sections:[],
    audioplaying:null,
    chats:[],
    status:[],
    statusComment:[],
    chat:[],
    about:[],
    ChatMessages:[],
    statusCommentreply:[],
    musicPromo:[],
    homePromo:[],
    destaquePromo:[],
    noticiasPromo:[],
    seachPromo:[],
    setPosts:async(title,imagecover, value, to, userdata, select, Category)=>{
        try {
            const selecttest = select || false
            const categorytest = Category || false
            const html = DOMPurify.sanitize(value, {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling", "src"]})
        const addPost = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/db/post",{
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body:JSON.stringify({title, imagecover, html, to, userdata, selecttest, categorytest})
        })
        const res = await addPost;
        const data = await res.json()
        if(data.success){
            if(to == "postes"){
                set((state)=>({
                    posts:[...state.prev, {title, imagecover, html, to, userdata}]
                }))
                return true
            }
            if(to == "noticias"){
                set({noticias:[{title, imagecover, html, to, userdata, selecttest}]})
            }
        }
        return false
        } catch (error) {
            console.log(error.message)
            return false
        }
        
    }, getPosts :async(to)=>{
         try {
            console.log(to)
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
                        console.log(data)
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
    },setSlide:async(nome,rank, image, numeroPlays, video, musica, Category, socialLinks, iframe)=>{
        try {
            console.log(iframe)
            const docref = doc(collection(db,"slides"));
             await setDoc(docref,{
                     id:docref.id,
                     nome, 
                     rank,
                     image, 
                     numeroPlays, 
                     video, 
                     musica, 
                     Category, 
                     socialLinks,
                     date:new Date(),
                     iframe
                 })  
                 return true  
        } catch (error) {
            console.log(error.message)
            return false
        }
    },slideconfig:async()=>{

    },getSlides:async()=>{
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
        return false
    }  
    },addmusic:async(artistname,artistSongTitle,artistpic, artistSong, genre)=>{
        try {
             const news = fetch("http://localhost:7000/som_do_momento/api/musica/add",{
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
            
    },setComment:async(id, comment)=>{
        try {
          const docref = collection(db,"postes", id , "comments");
        await addDoc(docref,{
            id,
            comment,
            date:new Date(),
        })  
        return true
        } catch (error) {
            console.log(error.message)
            return false
        }
        
    }, getComments : async(id)=>{
        const docref = collection(db, "postes", id , "comments");
        const q = query(docref,orderBy("date", "desc"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsreplies = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
           set({comments:[...commentsreplies]})
        });
        return unsubscribe;    
    },setChat :async(senderId, senderName)=>{
        const docref = doc(collection(db,"Messages"));
        await setDoc(docref, {
          id:docref.id,
          senderId,
          senderName,
          participants : [senderId , "8YeBW9kOomhFmJbBHS3fXxeBcJq2"],
          lastMessage:"",
          date:new Date(),
        })
    }
    ,setMessage:async(message, name , chatId , senderId)=>{
        console.log(chatId)
             const docref = doc(collection(db,"Messages", chatId, "ChatMessages"));
             const collectionref  = doc(db,"Messages", chatId)
             await setDoc(docref,{
                message,
                date:new Date(),
                id:senderId, 
                name
             })
             await updateDoc(collectionref, {
                lastMessage:message,
                date:new Date(),
             })
    }, getChats:async()=>{
        const chatref = collection(db,"Messages");
        const getting = await getDocs(chatref);
        const data= []
        getting.forEach((doct)=>{
            data.push(doct.data())
        })
        set({chats:data})
    },getChatMessages:async(participantId)=>{
        try {
        const docref = collection(db,"Messages",participantId ,"ChatMessages")
        const qref = query(docref, orderBy("date", "asc"))
        onSnapshot(qref, (snap)=>{
            const messages = []
            snap.forEach((message)=>{
                messages.push(message.data()) 
            })
            set({ChatMessages:messages})
        })
        return true
        } catch (error) {
            return false
        }
    },getSingleChat:async(participantId)=>{
         const cacheduserChat = JSON.parse(localStorage.getItem("userChat"));
         if(cacheduserChat?.data?.id){
             set({chat:cacheduserChat?.data})
             return;
         }
         const queryChats = query(collection(db,"Messages"),where("participants", "array-contains" , participantId));
         const getChat = await getDocs(queryChats);
         if(!getChat?.docs[0]?.exists()) return ;
         const data = getChat?.docs[0]?.data()
         localStorage.setItem("userChat", JSON.stringify({data}))
         set({chat:data})
    },updateUserPic:async(pic)=>{
        const url = await storemedia(pic);
        console.log(url)
        const submit = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/auth/Update",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({media:url})
        })
        const res = await submit
        const data = await res.json()
    },setStatus:async(media, description ,artistName , instaLink, artistImage)=>{
        try {
             const imageUrl = await storemedia(media);
       const artistImageUrl = await storemedia(artistImage) 
       const docref = doc(collection(db,"Status"));
       await setDoc(docref, {
            id:docref.id,
            image:imageUrl,
            description,
            artistName,
            type:media?.type,
            instaLink,
            artistImage:artistImageUrl
       })
        return true
        } catch (error) {
            return false
        }
      
    },setAboutPage:async(description)=>{
        const docref = collection(db,"AboutPage")
        const getting = await getDocs(docref)
        if(!getting.empty){
            console.log("good")
            const ref = getting.docs[0].ref
            await updateDoc(ref,{
                description
            })
            return;
        }
        const ref2 = doc(docref)
        await setDoc(ref2,{
            id:ref2.id,
            description,
        })
    },getAbout:async()=>{
        const docref = collection(db,"AboutPage");
        const getting = await getDocs(docref);
        const data = []
        getting.forEach((dt)=>{
            data.push(dt.data())
        })
        set({about:data})
    }
    ,setPromotion:async(to , media , link, buttonText, music, artistinfo, videocode)=>{
        const url = await storemedia(media);
        const musicurl  = music ? await storemedia(music) : false
        const docref = doc(collection(db,"Promotion"));
        if(music && to == "Musicas"){
             await setDoc(docref,{
            id:docref.id,
            media:url,
            to,
            type:media?.type,
            link,
            buttonText,
            musicurl,
            artistinfo,
            videocode
        })
        return;
        }
        await setDoc(docref,{
            id:docref.id,
            media:url,
            to,
            link,
            buttonText,
            videocode
        })
        return;
    },getStatus:async()=>{
        try {
          const docref = collection(db,"Status");
        const getting = await getDocs(docref);
        const data = [];
        getting.forEach((status)=>{
            data.push(status.data())
        })
        console.log(data)
        set({status:data})  
        return true
        } catch (error) {
            return false
        }
        
    },setStatusComments: async(id, comment, author)=>{
        const docref = doc(collection(db,"Status",id , "Comments"));
        await setDoc(docref,{
            id:docref.id,
            prevId: id,
            comment,
            date: new Date(),
            likes:0,
            author
        })
    },getStatusComments:async(id)=>{
        const docref = collection(db,"Status", id , "Comments");
        const qt = query(docref, orderBy("date","desc"))
        
        const unsubscribe = onSnapshot(qt, (snapshot) => {
            const comments = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));

           set((state) => ({
            statusComment:
                comments.length > 0 ? comments : state.statusComment,
            }));
        });
        return unsubscribe;
      },setCommentReply:async(prevId , id , comment , author)=>{
        console.log(prevId, id , comment , author)
        const docref = doc(collection(db,"Status",prevId ,"Comments", id, "comments"));
        await setDoc(docref, {
            id,
            docId:docref.id,
            comment,
            date: new Date(),
            like:0,
            author,
            prevId
        })
      },getReplies:async(prevId , id)=>{
        const docref = collection(db,"Status",prevId ,"Comments", id, "comments");
        const q = query(docref, orderBy("date", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsreplies = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));

           set((state) => ({
            statusCommentreply:
                commentsreplies.length > 0 ? commentsreplies : state.statusCommentreply,
            }));
        });
        return unsubscribe;

      }, // lista de musicas promocionais
      setAleatorio: async()=>{

      },getPromotion :async(from)=>{
        const docref = collection(db,"Promotion");
        const q = query(docref, where("to", "==", from));
        const getelements = await getDocs(q);
        if(getelements.empty) return;
        const data = []
        getelements.forEach((dc)=>{
            data.push(dc.data())
        });
        switch(from){
            case 'Musicas':
                 set({musicPromo:data})
                break;
            case 'Home':
                 set({homePromo:data})
                break;
            case 'Noticias':
                 set({noticiasPromo:data})
                break;
            case 'Destaques':
                 set({destaquePromo:data})
                break;
        }
        return;
       
      }, setPostReaction: async(id, emojis, likes)=>{
         const docref = doc(collection(db, "Postes", id));
         await updateDoc(docref, {
            likes,
            emojis,
         })

      }, getPostReactions:async(id)=>{
        const docref = doc(collection(db, "postes", id));
         const getting = await getDocs(docref);
      },deleteNews:async(id)=>{
        const docref = doc(db,"postes",id);
        await deleteDoc(docref);
      },deleteArticle:async(id)=>{
        const docref = doc(db,"postes",id);
        await deleteDoc(docref);
      },deletePromo:async(id)=>{
        const docref = doc(db,"Promotion",id);
        await deleteDoc(docref);
      },deleteStatus:async(id)=>{
        try {
            const docref = doc(db,"Status",id);
            await deleteDoc(docref);
            return true 
        } catch (error) {
            return false
        }
        
      },deleteRanking:async(id)=>{
        try {
           const docref = doc(db,"slides",id);
           await deleteDoc(docref); 
           return true
        } catch (error) {
           return false
        }
        
      },
}))