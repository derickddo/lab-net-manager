import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Aos from 'aos'
import { useEffect } from "react"
import { AuthProvider } from "./context/AuthContext"
import Dashboard from "./pages/Dashboard"
import PrivateRoutes from "./utils/PrivateRoutes"


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
          <Route element={<PrivateRoutes/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard/lab/:id" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
