import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import ProtectedRoute from './secure/ProtectedRoute'
import Posts from './Pages/EditorsOnly/Posts'
import Dashboard from './Pages/EditorsOnly/Dashboard'
import Home from './Pages/General/Home'
import Article from './Pages/General/Article'
import Login from './Pages/EditorsOnly/Login'
import Sobre from './Pages/General/Sobre'
import Noticias from './Pages/General/Noticias'
import Music from './Pages/General/Music'
import Destaques from './Pages/General/Destaques'
import Definicoes from './Pages/EditorsOnly/Definicoes'
import { HStack, VStack } from '@chakra-ui/react'
import { useAuthcontext } from './Context/AuthContextProvider'
import SideBar from './components/custom/SideBar'
import Musicas from './Pages/EditorsOnly/Musicas'
import Paginas from './Pages/EditorsOnly/Paginas'
import DestaquesAdmin from './Pages/EditorsOnly/DestaquesAdmin'
import NoticiasAdmin from './Pages/EditorsOnly/NoticiasAdmin'
import RankingAdmin from './Pages/EditorsOnly/RankingAdmin'

function App() {
  const {isAuthenticated} = useAuthcontext()
  return (
    <HStack height={"-webkit-fill-available"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={0} padding={0} width={"100%"}>
      <VStack height={"100vh"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={0} padding={0}>
        {isAuthenticated  && <SideBar/>}
      </VStack>
      
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
    </HStack>
  )
}

export default App
