import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router';

const AuthContext = createContext(null)
export default function AuthContextProvider({children}) {
    const [userdata , setUserData] = useState("");
    const [isAuthenticated, setAuthenticated] = useState(null);
  return (
    <AuthContext.Provider value={{userdata, setUserData, isAuthenticated, setAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthcontext = () => useContext(AuthContext)