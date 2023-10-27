import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Aos from 'aos'
import { useEffect } from "react"
import { AuthProvider } from "./context/AuthContext"
import Dashboard from "./pages/Dashboard"


function App() {
  useEffect(() =>{
    Aos.init()
  }, [])

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
