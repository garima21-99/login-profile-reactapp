import React from 'react'
import Login from './Login'

import ImageUpload from './ImageUpload'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
   
    <Routes>
    <Route exact path ="/" element={<Login/>}/>
       <Route exact path ="/login" element={<Login/>}/>
       <Route exact path ="/profile" element={<ImageUpload/>}/>
    </Routes>
   

   
    </>
  )
}

export default App

