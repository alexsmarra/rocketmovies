import { createContext, useContext } from 'react'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   return (
      <AuthContext.Provider value={{ name: 'Alexandre Simões', email: 'alexsm@gmail.com' }}>
         {children}
      </AuthContext.Provider>
   )
}

// nosso hook
function useAuth() {
   const context = useContext(AuthContext)

   return context
}

export { AuthProvider, useAuth }