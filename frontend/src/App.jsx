import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'


const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
