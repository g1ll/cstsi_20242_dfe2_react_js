/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react"

const AuthContext = createContext({
    user: {},
    token: null,
    setUser:()=>{},
    setToken:()=>{}
})

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('CURRENT_USER')))
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const setToken = (token) =>{
        _setToken(token)
        if(!token){
            localStorage.removeItem('ACCESS_TOKEN',token);
            localStorage.removeItem('CURRENT_USER');
            setUser(null);
            return;
        }
        localStorage.setItem('ACCESS_TOKEN',token);
    }

    return(
        <AuthContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext =() => useContext(AuthContext)
