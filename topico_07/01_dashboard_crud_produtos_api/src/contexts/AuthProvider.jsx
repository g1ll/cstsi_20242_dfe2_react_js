/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react"
import axiosClient from "../utils/axios-client";

const AuthContext = createContext({
    user: {},
    token: null,
    setUser: () => { },
    setToken: () => { },
    verifyLogin: ()=>{}
})

const verifyUser = async () => {

    try {
        const { data } = await axiosClient.get('/user')
        data && localStorage.setItem('CURRENT_USER', JSON.stringify(data));
        return data;
    } catch (error) {
        clearAuthStorages()
        console.error('Token inválido', error);
        return null
    }
}

const verifyToken = () => {
    try{
       return localStorage.getItem('ACCESS_TOKEN')
    }catch(error){
        console.error('Token inválido', error);
        clearAuthStorages()
        return null
    }
}

const clearAuthStorages = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('CURRENT_USER');
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, _setToken] = useState(verifyToken())

    const setToken = (token) => {
        _setToken(token)
        token && localStorage.setItem('ACCESS_TOKEN', token);
        !token && clearAuthStorages();
    }

    const verifyLogin = async () =>{
        try{
            const user = await verifyUser()
            const token = verifyToken()
            setUser(user)
            return (user && token)
        }catch(error){
            console.error(error)
            return false;
        }

    }

    useEffect(() => {
         verifyUser()
            .then(user=>setUser(user))
            .catch(console.error)    
    }, [token]);

    return (
        <AuthContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            verifyLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
