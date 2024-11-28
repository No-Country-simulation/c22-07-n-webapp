import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Login from "./Components/Login"
import { Route, Routes } from "react-router-dom"


function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
     <Footer/>

    </>
  )
}

export default App
