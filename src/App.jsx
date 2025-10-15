import { lazy, Suspense, useState} from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { Button, HStack, Spinner, VStack } from '@chakra-ui/react'
import { useAuthcontext } from './Context/AuthContextProvider'
import SideBar from './components/custom/SideBar'
import DrawerTwo from './components/custom/DrawerTwo'
import * as Icon from "react-bootstrap-icons"
import Messages from './Pages/EditorsOnly/Messages'
import SinglePost from './Pages/General/SinglePost'
import SingleNews from './Pages/General/SingleNews'
import SingleMusicPage from './Pages/General/SingleMusicPage'
import NotFound from './Pages/General/NotFound'
import Promotion from './Pages/EditorsOnly/Promotion'
import SearchPage from './Pages/General/SearchPage'
import MessageCard from './components/custom/MessageCard'


const Home = lazy(()=>import("./Pages/General/Home")); 
const Article = lazy(()=>import("./Pages/General/Article")); 
const Music = lazy(()=>import("./Pages/General/Music")); 
const Noticias = lazy(()=>import("./Pages/General/Noticias")); 
const Destaques = lazy(()=>import("./Pages/General/Destaques")); 
const Sobre = lazy(()=>import("./Pages/General/Sobre")); 

const Paginas = lazy(()=>import("./Pages/EditorsOnly/Paginas")); 
const Definicoes = lazy(()=>import("./Pages/EditorsOnly/Definicoes")); 
const Musicas = lazy(()=>import("./Pages/EditorsOnly/Musicas")); 
const NoticiasAdmin = lazy(()=>import("./Pages/EditorsOnly/NoticiasAdmin")); 
const DestaquesAdmin = lazy(()=>import("./Pages/EditorsOnly/DestaquesAdmin")); 
const RankingAdmin = lazy(()=>import("./Pages/EditorsOnly/RankingAdmin")); 
const Posts = lazy(()=>import("./Pages/EditorsOnly/Posts")); 
const ProtectedRoute = lazy(()=>import("./secure/ProtectedRoute")); 

function App() {
  const {isAuthenticated} = useAuthcontext()
  const [hide, setHide] = useState(true)
  const [sidebar, setSidebar] = useState(false)
  return (
    <VStack  height={"100%"} alignItems={"flex-start"}  gap={0} padding={0} width={"100vw"}>
      <VStack hidden={sidebar ? true : false}  alignItems={"flex-start"} justifyContent={"flex-start"} gap={0} padding={0}>
        {isAuthenticated  && <DrawerTwo icon={<Icon.List color='black'/>}  children={<SideBar states={sidebar} onclicks={(e)=>{setSidebar(e)}}/>}/> }
      </VStack>
    <Suspense fallback={<VStack alignItems={"center"} justifyContent={"center"} width={"100vw"} height={"100vh"}><Spinner size={"lg"} color={"black"}/></VStack>}>
        <Routes>
        <Route path='/admin' element={<ProtectedRoute/>}>
          <Route path='/admin/DestaquesAdmin' element={<DestaquesAdmin/>}/> 
          <Route path='/admin/Paginas' element={<Paginas/>}/>
          <Route path='/admin/Definicoes' element={<Definicoes/>}/>
          <Route path='/admin/NoticiasAdmin' element={<NoticiasAdmin/>}/>
          <Route path='/admin/musicas' element={<Musicas/>}/>
          <Route path='/admin/RankingAdmin' element={<RankingAdmin/>}/>
          <Route path='/admin/Messages' element={<Messages/>}/>
          <Route path='/admin/Promotion' element={<Promotion/>}/>
          <Route index element={<Posts/>}/>
        </Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/Article' element={<Article/>}>
          <Route path='Post/:id' element={<SinglePost/>}/>
          <Route path='News/:id' element={<SingleNews/>}/>
        </Route>
        <Route path='/Destaque' element={<Destaques/>}/>
        <Route path='/Music' element={<Music/>}>
           <Route path='Single/:id' element={<SingleMusicPage/>}/>
        </Route>
        <Route path='/Noticias' element={<Noticias/>}/>
        <Route path='/Search/:id' element={<SearchPage/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route  path='*' element={<NotFound/>}/>
      </Routes>
    </Suspense>
    <MessageCard hide={hide}/>
    <Button onClick={()=>hide ? setHide(false) : setHide(true)} 
    bg={"blue"} height={50} w={50} padding={10} position={"fixed"} 
    zIndex={150} borderRadius={50} bottom={87} right={5}><Icon.ChatFill size={30}/></Button>
            
    
    </VStack>
  )
}

export default App
