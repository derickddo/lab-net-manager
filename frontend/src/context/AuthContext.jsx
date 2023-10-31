import { createContext, useState } from "react";
import PropTypes from 'prop-types'
import {jwtDecode} from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert2'


const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens')?JSON.parse(localStorage.getItem('authTokens')): null)

    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)

    const [signUp, setSignUp]  = useState(false)
    const [spin, setSpin] = useState(false)

    let navigate = useNavigate()

    const loginUser = async(e, email, password) =>{
        e.preventDefault()
        setSpin(true)
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'email':email, 'password':password})
        })
        if(response.status === 200){
            const data = await response.json()
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            setSpin(false)
            navigate('/dashboard')
            swal.fire({
                title: "Login Successful",
                icon: "success",
                toast: true,
                timer: 3000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
        else {
            setSpin(false)    
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "Username or passowrd does not exists",
                icon: "error",
                toast: true,
                timer: 3000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }
    const registerUser = async(e, email, password, password2, name) => {
        setSpin(true)
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'email':email, 'password':password, 'password2':password2, "name": name})
        })
        if(response.status === 201){
            const data = await response.json()
            console.log(data)
            setSignUp(false)
            setSpin(false)
            swal.fire({
            title: "You have successfully registered sign in now...",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
            })
        }
        else{
            setSpin(false)
            swal.fire({
            title: "An error occurred...",
            icon: "error",
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
            })
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
        swal.fire({
            title: "You have been logged out...",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }
    const contextData = {
        authTokens:authTokens,
        user: user,
        signUp: signUp,
        spin: spin,
        setSignUp: setSignUp,
        setAuthTokens: setAuthTokens,
        setUser: setUser,
        loginUser:loginUser,
        logoutUser: logoutUser,
        registerUser: registerUser,
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}