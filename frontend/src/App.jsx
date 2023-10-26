import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Aos from 'aos'
import { useEffect } from "react"


function App() {
  useEffect(() =>{
    Aos.init()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
