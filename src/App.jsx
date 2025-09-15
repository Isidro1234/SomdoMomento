import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import ProtectedRoute from './secure/ProtectedRoute'
import Edit from './Pages/EditorsOnly/Edit'
import Posts from './Pages/EditorsOnly/Posts'
import Dashboard from './Pages/EditorsOnly/Dashboard'
import Home from './Pages/General/Home'
import Article from './Pages/General/Article'
import Login from './Pages/EditorsOnly/Login'
import Sobre from './Pages/General/Sobre'
import Noticias from './Pages/General/Noticias'
import Music from './Pages/General/Music'
import Destaques from './Pages/General/Destaques'

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<ProtectedRoute/>}>
        <Route path='/admin/Edit' element={<Edit/>}/>
        <Route path='/admin/posts' element={<Posts/>}/>
        <Route index element={<Dashboard/>}/>
      </Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/Article' element={<Article/>}/>
      <Route path='/Destaque' element={<Destaques/>}/>
      <Route path='/Music' element={<Music/>}/>
      <Route path='/Noticias' element={<Noticias/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
    </Routes>
  )
}

export default App
