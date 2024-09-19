import { useState } from 'react'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import './App.css'
import UserRegistration from './o1-Form/UserRegistrationwithYup'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<UserRegistration/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
