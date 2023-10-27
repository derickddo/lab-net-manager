import { createContext } from "react";
import PropTypes from 'prop-types'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const loginUser = async(e) =>{
        e.preventDefault()
        const response = await fetch('', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'email':e.target.emai.value}, {'password':e.target.password.value})
        })
        if(response === 200){
            const data = await response.json()
            console.log(data)
        }
    }
    const contextData = {
        name: 'Derick',
        loginUser:loginUser
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