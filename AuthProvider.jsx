import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userdata, setUserdata] = useState(null)
    useEffect(()=>{
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserdata(employees)
    },[])

    return (
        <>
            <AuthContext.Provider value={[userdata, setUserdata]}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider