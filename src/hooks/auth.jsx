import { createContext, useContext, useState } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   const [data, setData] = useState({})

   /* entre chaves, assim, não precisará ser chamado necessariamente nessa ordem */
   async function signIn({ email, password }) {
      try {
         const response = await api.post("/sessions", { email, password })
         const { user, token } = response.data

         /* Inserindo um token do tipo Bearer, de autorização, no cabeçalho por padrão em todas as
         requisições que o usuário for fazer a partir de agora */
         api.defaults.headers.authorization = `Bearer ${token}`
         console.log(user, token)
         setData({ user, token })

      } catch(error) {
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Não foi possível entrar.")
         }
      }
   }

   return (
      <AuthContext.Provider value={{ signIn, user: data.user }}>
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