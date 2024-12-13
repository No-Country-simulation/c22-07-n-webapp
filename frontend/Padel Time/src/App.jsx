import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Login from "./Components/Login"
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Reservas from './Components/Reservas'
import Feature from './Components/Feature'
import Registrarse from './Components/Registrarse'
import Contact from "./Components/Contact";
import React from 'react';
import Logout from "./Components/Logout"



function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/feature" element={<Feature/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reservation" element={<Reservas/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sign-up" element={<Registrarse/>}/>
        <Route path="/logout" element={<Logout />} />
      </Routes>
     <Footer/>

    </>
  )
}

export default App
