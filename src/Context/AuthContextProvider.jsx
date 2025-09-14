import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)
export default function AuthContextProvider({children}) {
    const [userdata , setUserData] = useState("");
    const [isAuthenticated, setAuthenticated] = useState("");
  return (
    <AuthContext.Provider value={{userdata, setUserData, isAuthenticated, setAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthcontext = () => useContext(AuthContext)