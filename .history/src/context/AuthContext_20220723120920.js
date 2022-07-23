import React, { useContext } from 'react'

const AuthContext= React.createContext()

export function useAuth(){
    return useContext
}

export default function AuthProvider({children}) {
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>


    )
}
