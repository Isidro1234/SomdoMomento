import { lazy, Suspense} from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { HStack, Spinner, VStack } from '@chakra-ui/react'
import { useAuthcontext } from './Context/AuthContextProvider'
import SideBar from './components/custom/SideBar'



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
  return (
    <HStack  height={"-webkit-fill-available"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={0} padding={0} width={"100vw"}>
      <VStack flex={.3}  height={"100vh"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={0} padding={0}>
        {isAuthenticated  && <SideBar/>}
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
          <Route index element={<Posts/>}/>
        </Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/Article' element={<Article/>}/>
        <Route path='/Destaque' element={<Destaques/>}/>
        <Route path='/Music' element={<Music/>}/>
        <Route path='/Noticias' element={<Noticias/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
      </Routes>
    </Suspense>
    
    </HStack>
  )
}

export default App
